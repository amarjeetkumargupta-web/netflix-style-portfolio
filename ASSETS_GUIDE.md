# Assets Guide

This guide explains where to place all your media files (images, videos, music) so they show up correctly on the website.

## 1. Intro Video & Music
These files play when the website first opens (for the first 4 seconds).
- **Video:** Replace `assets/intro.mp4` with your intro video.
- **Music:** Replace `assets/intro-music.mp3` with your background audio.
*(Note: Browsers often block audio from playing automatically unless you click anywhere on the screen first. The website is set up to try and play it, but if blocked, it will play the moment you click.)*

## 2. Hero Background Video
This is the video playing in the background of the main landing page.
- **Video:** Replace `assets/hero-video.mp4` with your background video.

## 3. Profile Images (Avatars)
These are the circle avatars on the "Who's Watching" screen.
Place your square images in the `assets/profiles/` folder:
- **Creative Strategist:** `assets/profiles/strategist.jpg`
- **Social Media Manager:** `assets/profiles/media.jpg`
- **Video Editor:** `assets/profiles/editor.jpg`
- **Graphic Designer:** `assets/profiles/designer.jpg`
- **Anchor & Host:** `assets/profiles/anchor.png` (or `.jpg`, just make sure it matches the file extension in `script.js`)

## 4. Cards (Thumbnail Images)
These are the rectangular thumbnail images for all your sections (like Netflix movies). 
Place these inside the **`assets/cards/`** folder:

### General Information Cards
- **Work Permit:** `assets/cards/work-permit.jpg`
- **Skills & Tools:** `assets/cards/skills.jpg`
- **Experience:** `assets/cards/experience.jpg`
- **Contact Me:** `assets/cards/contact.jpg`

### Creative Strategist Cards
- **Articles:** `assets/cards/articles.jpg`
- **Case Studies:** `assets/cards/case-studies.jpg`
- **Projects:** `assets/cards/projects.jpg`

### Other Profile Cards
- **Certifications:** `assets/cards/certifications.jpg`
- **Recommendations:** `assets/cards/recommendations.jpg`
- **Graphic Design/Layouts:** `assets/cards/brand-concepts.jpg`, `assets/cards/social-projects.jpg`
- **Event Work:** `assets/cards/events.jpg`, `assets/cards/cu-fest.jpg`, `assets/cards/diwali-hunt.jpg`, `assets/cards/fresh-gen.jpg`
- **Hobbies/Interests:** `assets/cards/music.jpg`, `assets/cards/reading.jpg`, `assets/cards/blogs.jpg`

## 5. Adding Data (Projects, Articles, Case Studies)
For the Creative Strategist profile, you can now add or remove items by editing the JSON files in the **`data/`** folder. 
No need to touch the main code!
- Open `data/articles.json` to add your articles.
- Open `data/case-studies.json` to add your case studies.
- Open `data/projects.json` to add your projects.

Just follow the format of the existing examples in those files.

## 6. Resume Images (Per Profile)
Each profile has its own resume. Place your resume images (screenshots/photos of your resume) in the **`assets/resumes/`** folder:
- **Media (Social Media Manager):** `assets/resumes/media-resume.jpg`
- **Editor (Video Editor):** `assets/resumes/editor-resume.jpg`
- **Designer (Graphic Designer):** `assets/resumes/designer-resume.jpg`
- **Strategist (Creative Strategist):** `assets/resumes/strategist-resume.jpg`
- **Anchor (Anchor & Host):** `assets/resumes/anchor-resume.jpg`

When users click the **▶ Resume** button on the hero section, it will open a Netflix-style popup showing the resume image for the currently selected profile, with a download button.

**Tip:** You can use `.jpg` or `.png` for the resume images. If you use `.png`, update the file paths in `script.js` under `CONFIG.resumeImages`.
