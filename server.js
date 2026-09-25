/* ==================================================
   AVIKA MALIK PORTFOLIO — BACKEND SERVER
   MongoDB Contact Form + Email Notifications
   ================================================== */

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── MongoDB Connection ──
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/avika-portfolio')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

// ── Contact Schema ──
const contactSchema = new mongoose.Schema({
    name:          { type: String, required: true, trim: true },
    email:         { type: String, required: true, trim: true },
    phone:         { type: String, required: true, trim: true },
    projectGenre:  { type: String, required: true, trim: true },
    preferredDate: { type: String, required: true, trim: true },
    preferredTime: { type: String, required: true, trim: true },
    description:   { type: String, required: true, trim: true },
    message:       { type: String, required: true, trim: true },
    createdAt:     { type: Date, default: Date.now },
    ip:            { type: String, default: '' }
});

const Contact = mongoose.model('Contact', contactSchema);

// ── Email Transporter (Gmail) ──
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,    // Your Gmail address
        pass: process.env.EMAIL_PASS     // Gmail App Password (NOT your regular password)
    }
});

// ── API: Submit Contact Form ──
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, projectGenre, preferredDate, preferredTime, description, message } = req.body;

        // Validate
        if (!name || !email || !phone || !projectGenre || !preferredDate || !preferredTime || !description || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Save to MongoDB
        const contact = new Contact({
            name, email, phone, projectGenre, preferredDate, preferredTime, description, message,
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
        });
        await contact.save();
        console.log(`📩 New contact from: ${name} (${email})`);

        // Send Email Notification
        const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

        const mailOptions = {
            from: `"Avika Portfolio" <${process.env.EMAIL_USER}>`,
            to: ownerEmail,
            replyTo: email,
            subject: `🔔 New Enquiry: ${projectGenre}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #e5e5e5; border-radius: 8px; overflow: hidden;">
                    <div style="background: #E50914; padding: 20px 30px;">
                        <h1 style="margin: 0; font-size: 20px; color: #fff; letter-spacing: 2px;">NEW PROJECT ENQUIRY</h1>
                    </div>
                    <div style="padding: 30px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; color: #888; width: 140px; vertical-align: top;">Name</td>
                                <td style="padding: 10px 0; color: #fff; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; vertical-align: top;">Email</td>
                                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #E50914;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; vertical-align: top;">Phone</td>
                                <td style="padding: 10px 0; color: #ccc;">${phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; vertical-align: top;">Project Genre</td>
                                <td style="padding: 10px 0; color: #fff; font-weight: 600;">${projectGenre}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; vertical-align: top;">Preferred Date</td>
                                <td style="padding: 10px 0; color: #ccc;">${preferredDate}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; vertical-align: top;">Preferred Time</td>
                                <td style="padding: 10px 0; color: #ccc;">${preferredTime}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 6px; border-left: 3px solid #E50914;">
                            <p style="color: #888; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Project Description</p>
                            <p style="color: #e5e5e5; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
                        </div>
                        <div style="margin-top: 16px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 6px; border-left: 3px solid #E50914;">
                            <p style="color: #888; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                            <p style="color: #e5e5e5; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                        <p style="margin-top: 20px; color: #666; font-size: 12px;">
                            Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log(`📧 Email notification sent to: ${ownerEmail}`);

        res.json({ success: true, message: 'Enquiry saved and email sent!' });

    } catch (err) {
        console.error('❌ Error:', err.message);
        res.status(500).json({ error: 'Failed to process your message. Please try again.' });
    }
});

// ── API: Get All Contacts (Admin) ──
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ── Serve index.html for all routes ──
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Start Server ──
app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio server running at: http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}\n`);
});
