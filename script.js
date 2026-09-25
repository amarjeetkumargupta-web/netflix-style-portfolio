/* ==================================================
   AVIKA MALIK — NETFLIX PORTFOLIO — SCRIPT v2
   ================================================== */

/* ══════════════════════════════════════
   CONFIGURATION — Edit file paths here
   ══════════════════════════════════════ */
const CONFIG = {
    // Intro duration (ms) before fade to black
    introDuration: 8230,

    // File paths — place your files at these locations
    introVideo: 'assets/intro.mp4',           // Optional intro video
    introMusic: 'assets/intro-music.mp3',     // Background music for intro
    heroVideo:  'assets/hero-video.mp4',      // Hero background video

    // Profile images — replace these files to change avatars
    // Location: assets/profiles/media.jpg, editor.jpg, etc.
    profileImages: {
        media:      'assets/profiles/media.jpg',
        editor:     'assets/profiles/editor.jpg',
        designer:   'assets/profiles/designer.jpg',
        strategist: 'assets/profiles/strategist.jpg',
        anchor:     'assets/profiles/anchor.png'
    },

    // Contact API endpoint (when running with server.js)
    contactAPI: '/api/contact'
};


/* ══════════════════════════════════════
   CARD DATA — All reusable cards
   ══════════════════════════════════════ */
const CARDS = {
    // 🖼️ INSTRUCTIONS: To add images to these cards, change the 'image' path below to your image location (e.g., 'assets/cards/my-image.jpg'). 
    // If no image is found, it will safely fall back to a colored gradient.
    
    // Core Info
    'work-permit':      { title: 'Work Permit',          sub: 'Basic Details & Resume',          image: 'assets/cards/work-permit.jpg', fallback: 'linear-gradient(135deg, #182848 0%, #4b6cb7 100%)', icon: 'fas fa-id-card' },
    'skills-tools':     { title: 'Skills',               sub: 'Tools & Platforms',               image: 'assets/cards/skills.jpg', fallback: 'linear-gradient(135deg, #00CEC9 0%, #005F5C 100%)', icon: 'fas fa-tools' },
    'experience':       { title: 'Experience',           sub: 'Social Media & Marketing',        image: 'assets/cards/experience.jpg', fallback: 'linear-gradient(135deg, #0984E3 0%, #043B6A 100%)', icon: 'fas fa-briefcase' },
    'certifications':   { title: 'Certifications',       sub: 'Training & Accolades',            image: 'assets/cards/certifications.jpg', fallback: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)', icon: 'fas fa-certificate' },
    'recommendations':  { title: 'Recommendations',      sub: 'Testimonials',                    image: 'assets/cards/recommendations.jpg', fallback: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)', icon: 'fas fa-star' },
    'projects':         { title: 'Projects',             sub: 'Case Studies',                    image: 'assets/cards/projects.jpg', fallback: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)', icon: 'fas fa-folder-open' },
    'contact':          { title: 'Contact Me',           sub: 'Let\'s Connect',                  image: 'assets/cards/contact.jpg', fallback: 'linear-gradient(135deg, #E50914 0%, #6b0610 100%)', icon: 'fas fa-envelope' },

    // Row 2 (Continue Watching / Personal Brand)
    'music':            { title: 'Music',                sub: 'Vibes & Audio',                   image: 'assets/cards/music.jpg', fallback: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)', icon: 'fas fa-music' },
    'reading':          { title: 'Reading',              sub: 'Books & Knowledge',               image: 'assets/cards/reading.jpg', fallback: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)', icon: 'fas fa-book-open' },
    'blogs':            { title: 'Blogs',                sub: 'Writing & Thoughts',              image: 'assets/cards/blogs.jpg', fallback: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', icon: 'fas fa-pen-fancy' },
    
    // Services & Deep Dives
    'cu-fest':          { title: 'CU Fest',              sub: 'Event Marketing & Management',    image: 'assets/cards/cu-fest.jpg', fallback: 'linear-gradient(135deg, #E50914 0%, #6b0610 100%)', icon: 'fas fa-fire' },
    'diwali-hunt':      { title: 'Diwali Hunt 2.0',      sub: 'Campaign & Promotion',            image: 'assets/cards/diwali-hunt.jpg', fallback: 'linear-gradient(135deg, #F4A020 0%, #8B5E00 100%)', icon: 'fas fa-star' },
    'fresh-gen':        { title: 'Fresh Gen Fiesta',     sub: 'Event & Social Media',            image: 'assets/cards/fresh-gen.jpg', fallback: 'linear-gradient(135deg, #00B4D8 0%, #005F73 100%)', icon: 'fas fa-bolt' },
    'abhivyakti':       { title: 'Abhivyakti',           sub: 'Creative & Cultural',             image: 'assets/cards/abhivyakti.jpg', fallback: 'linear-gradient(135deg, #9B59B6 0%, #4A235A 100%)', icon: 'fas fa-palette' },
    'social-projects':  { title: 'Social Media Projects',sub: 'Strategy & Execution',            image: 'assets/cards/social-projects.jpg', fallback: 'linear-gradient(135deg, #2ECC71 0%, #145A32 100%)', icon: 'fas fa-share-nodes' },
    'brand-concepts':   { title: 'Brand Concepts',       sub: 'Ideation & Direction',            image: 'assets/cards/brand-concepts.jpg', fallback: 'linear-gradient(135deg, #E74C8B 0%, #7B2D4E 100%)', icon: 'fas fa-lightbulb' },
    
    'svc-social':       { title: 'Social Media',         sub: 'Strategy · Management · Growth',  image: 'assets/cards/svc-social.jpg', fallback: 'linear-gradient(135deg, #1877F2 0%, #0B3D91 100%)', icon: 'fas fa-hashtag' },
    'svc-content':      { title: 'Creative & Content',   sub: 'Ideation · Creation · Direction', image: 'assets/cards/svc-content.jpg', fallback: 'linear-gradient(135deg, #FF6B6B 0%, #8B2020 100%)', icon: 'fas fa-wand-magic-sparkles' },
    'svc-video':        { title: 'Video Production',     sub: 'Shoot · Edit · Deliver',          image: 'assets/cards/svc-video.jpg', fallback: 'linear-gradient(135deg, #6C5CE7 0%, #2D1B69 100%)', icon: 'fas fa-video' },
    'svc-marketing':    { title: 'Marketing',            sub: 'Brand · Campaign · Research',     image: 'assets/cards/svc-marketing.jpg', fallback: 'linear-gradient(135deg, #00B894 0%, #004D40 100%)', icon: 'fas fa-chart-line' },
    'svc-strategy':     { title: 'Strategy',             sub: 'Positioning · Planning · Growth', image: 'assets/cards/svc-strategy.jpg', fallback: 'linear-gradient(135deg, #F39C12 0%, #7D5006 100%)', icon: 'fas fa-chess' },
    'svc-management':   { title: 'Management',           sub: 'Projects · Events · Teams',       image: 'assets/cards/svc-management.jpg', fallback: 'linear-gradient(135deg, #636E72 0%, #2D3436 100%)', icon: 'fas fa-diagram-project' },

    'about':            { title: 'About Me',             sub: 'The person behind the work',      image: 'assets/cards/about.jpg', fallback: 'linear-gradient(135deg, #E17055 0%, #6B2F22 100%)', icon: 'fas fa-user' },
    'events':           { title: 'Events & Leadership',  sub: 'On-ground execution',             image: 'assets/cards/events.jpg', fallback: 'linear-gradient(135deg, #FD79A8 0%, #7B3A52 100%)', icon: 'fas fa-calendar-check' },
    'anchoring':        { title: 'Anchoring',            sub: 'Communication & stage',           image: 'assets/cards/anchoring.jpg', fallback: 'linear-gradient(135deg, #A29BFE 0%, #4834D4 100%)', icon: 'fas fa-microphone' }
};


/* ══════════════════════════════════════
   PROFILE-SPECIFIC CONTENT ROWS
   ══════════════════════════════════════ */
const defaultRows = [
    { title: 'Core Information', cardIds: ['work-permit', 'skills-tools', 'experience'] },
    { title: 'Background & Work', cardIds: ['certifications', 'recommendations', 'projects'] },
    { title: 'Get In Touch', cardIds: ['contact'] }
];

const PROFILE_ROWS = {
    media: defaultRows,
    editor: defaultRows,
    designer: defaultRows,
    strategist: defaultRows,
    anchor: defaultRows
};


/* ══════════════════════════════════════
   PROFILE-SPECIFIC HERO TEXT
   ══════════════════════════════════════ */
const PROFILE_HERO = {
    media: {
        tagline: 'Social Media Manager · Content Strategist · Digital Marketer',
        desc: 'Building communities, managing campaigns, and growing brands across platforms. I turn marketing ideas into complete social execution.'
    },
    editor: {
        tagline: 'Video Editor · Videographer · Content Creator',
        desc: 'From raw footage to final cut — crafting cinematic and engaging video content that tells a brand\'s story and captures audience attention.'
    },
    designer: {
        tagline: 'Creative Designer · Visual Strategist · Brand Identity',
        desc: 'Crafting visual concepts, brand identities, and creative designs that bring ideas to life and establish a strong visual brand voice.'
    },
    strategist: {
        tagline: 'Creative Strategist · Brand Positioning · Campaign Planner',
        desc: 'Someone who understands trends but doesn\'t blindly follow them. Taking a brand\'s vision and turning it into a structured, data-driven marketing execution.'
    },
    anchor: {
        tagline: 'Stage Anchor · Event Host · Communicator',
        desc: 'Confident on-stage presence, audience handling, and professional anchoring for events, festivals, and formal ceremonies.'
    },
    default: {
        tagline: 'Creative Strategist · Content Creator · Social Media Manager · Editor · Videographer',
        desc: 'From idea to execution — strategy, content, social media, campaigns, editing & management. I take a brand and turn it into complete creative + marketing execution.'
    }
};


/* ══════════════════════════════════════
   DETAIL PAGE CONTENT (PROFILE SPECIFIC)
   ══════════════════════════════════════ */
const PROFILE_DETAILS = {
    media: {
        'work-permit': {
            title: 'Work Permit', subtitle: 'Basic Details & Resume',
            gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
            sections: [{ heading: 'Positioning', type: 'text', content: 'Open to freelance, contract, or full-time roles. Focused on end-to-end account management, audience growth, and cross-platform execution.' }]
        },
        'skills-tools': {
            title: 'Skills', subtitle: 'Tools & Platforms',
            gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
            sections: [{ heading: 'Core Skills', type: 'tags', items: ['Content Calendars', 'Community Management', 'Social Media Audits', 'Cross-Platform Adaptation', 'Meta Business Suite', 'Audience Growth'] }]
        },
        'experience': {
            title: 'Experience', subtitle: 'Social Media Management',
            gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
            sections: [{ heading: 'What I Do', type: 'text', content: '3+ years bridging creative ideas with operational execution. I don’t just post; I manage communities, adapt content natively for IG/LinkedIn/YT, and analyze data to optimize the next move.' }]
        },
        'certifications': {
            title: 'Certifications', subtitle: 'Training & Accolades',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
            sections: [{ heading: 'Background', type: 'text', content: 'B.E. Computer Science. My tech background means I understand algorithms, analytics, and operational workflows just as well as I understand content.' }]
        },
        'recommendations': {
            title: 'Recommendations', subtitle: 'Testimonials',
            gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
            sections: [{ heading: 'Feedback', type: 'text', content: 'Backed by team leads and clients for taking ownership of accounts and driving organic, metric-backed growth. (Available upon request).' }]
        },
        'projects': {
            title: 'Projects', subtitle: 'Case Studies',
            gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
            sections: [{ heading: 'Key Projects', type: 'text', content: 'Led digital pushes for CU Fest & Diwali Hunt 2.0. Managed high-traffic social pages, driving engagement and event footfall through calculated content drops.' }]
        },
        'contact': {
            title: 'Contact Me', subtitle: 'Let\'s Connect',
            gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
            sections: [
                { heading: '', type: 'text', content: 'Have a brand that needs a voice? Let’s build your social presence.' },
                { heading: 'Get in Touch', type: 'contact', items: [
                    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Avika Malik', link: '#' },
                    { icon: 'fab fa-instagram', label: 'Instagram', value: '@avikamalik', link: '#' }
                ]}
            ]
        }
    },
    editor: {
        'work-permit': {
            title: 'Work Permit', subtitle: 'Basic Details & Resume',
            gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
            sections: [{ heading: 'Positioning', type: 'text', content: 'Available for video post-production, videography, and short-form editing projects.' }]
        },
        'skills-tools': {
            title: 'Skills', subtitle: 'Tools & Platforms',
            gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
            sections: [{ heading: 'Core Skills', type: 'tags', items: ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'Lightroom', 'Pacing & Retention Strategy', 'Color Grading'] }]
        },
        'experience': {
            title: 'Experience', subtitle: 'Video & Post-Production',
            gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
            sections: [{ heading: 'What I Do', type: 'text', content: 'Managed end-to-end video workflows. From cutting raw event footage to delivering fast-paced, algorithm-friendly Instagram Reels and cinematic brand videos.' }]
        },
        'certifications': {
            title: 'Certifications', subtitle: 'Training & Accolades',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
            sections: [{ heading: 'Credentials', type: 'text', content: 'Algorithm-approved. 3+ years of hands-on timeline experience mastering retention metrics and audio-visual storytelling.' }]
        },
        'recommendations': {
            title: 'Recommendations', subtitle: 'Testimonials',
            gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
            sections: [{ heading: 'Feedback', type: 'text', content: 'Endorsed by creative directors and event heads who needed fast turnarounds without compromising cinematic quality.' }]
        },
        'projects': {
            title: 'Projects', subtitle: 'Case Studies',
            gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
            sections: [{ heading: 'Key Projects', type: 'text', content: 'Delivered high-retention event aftermovies (Fresh Gen Fiesta), concept-based brand videos, and viral short-form social content.' }]
        },
        'contact': {
            title: 'Contact Me', subtitle: 'Let\'s Connect',
            gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
            sections: [
                { heading: '', type: 'text', content: 'Got raw footage or a visual concept? Let’s make it cinematic.' },
                { heading: 'Get in Touch', type: 'contact', items: [
                    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                    { icon: 'fab fa-instagram', label: 'Instagram', value: '@avikamalik', link: '#' }
                ]}
            ]
        }
    },
    designer: {
        'work-permit': {
            title: 'Work Permit', subtitle: 'Basic Details & Resume',
            gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
            sections: [{ heading: 'Positioning', type: 'text', content: 'Open to creative direction, layout design, and visual branding projects.' }]
        },
        'skills-tools': {
            title: 'Skills', subtitle: 'Tools & Platforms',
            gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
            sections: [{ heading: 'Core Skills', type: 'tags', items: ['Adobe Photoshop', 'Canva', 'Visual Direction', 'Layout Design', 'Typography', 'Brand Moodboarding'] }]
        },
        'experience': {
            title: 'Experience', subtitle: 'Visuals & Static Content',
            gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
            sections: [{ heading: 'What I Do', type: 'text', content: 'Translated brand strategies into scroll-stopping visual assets. Created everything from event promotional creatives to educational carousels and cohesive social grids.' }]
        },
        'certifications': {
            title: 'Certifications', subtitle: 'Training & Accolades',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
            sections: [{ heading: 'Credentials', type: 'text', content: 'A proven, data-backed portfolio of high-converting visual assets and cohesive brand identities.' }]
        },
        'recommendations': {
            title: 'Recommendations', subtitle: 'Testimonials',
            gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
            sections: [{ heading: 'Feedback', type: 'text', content: 'Praised by marketing teams and brand clients who needed modern, premium aesthetics rather than basic templates.' }]
        },
        'projects': {
            title: 'Projects', subtitle: 'Case Studies',
            gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
            sections: [{ heading: 'Key Projects', type: 'text', content: 'Designed Abhivyakti campaign creatives, bespoke social media layouts, and complete brand moodboards from scratch.' }]
        },
        'contact': {
            title: 'Contact Me', subtitle: 'Let\'s Connect',
            gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
            sections: [
                { heading: '', type: 'text', content: 'Need premium, editorial-style visuals? Let’s design them.' },
                { heading: 'Get in Touch', type: 'contact', items: [
                    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Avika Malik', link: '#' }
                ]}
            ]
        }
    },
    strategist: {
        'work-permit': {
            title: 'Work Permit', subtitle: 'Basic Details & Resume',
            gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
            sections: [{ heading: 'Positioning', type: 'text', content: 'Available for brand positioning, campaign planning, and growth strategy consulting.' }]
        },
        'skills-tools': {
            title: 'Skills', subtitle: 'Tools & Platforms',
            gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
            sections: [{ heading: 'Core Skills', type: 'tags', items: ['Brand Strategy', 'Content Pillars', 'Audience & Competitor Research', 'Trend Analysis', 'Storytelling', 'Copywriting'] }]
        },
        'experience': {
            title: 'Experience', subtitle: 'Brand & Campaigns',
            gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
            sections: [{ heading: 'What I Do', type: 'text', content: '3+ years turning vague ideas into actionable marketing roadmaps. I build content strategies that don’t just blindly follow trends—they establish brand authority.' }]
        },
        'certifications': {
            title: 'Certifications', subtitle: 'Training & Accolades',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
            sections: [{ heading: 'Credentials', type: 'text', content: 'Strategic thinking validated by 3+ years of real-world campaign execution, marketing management, and event promotion.' }]
        },
        'recommendations': {
            title: 'Recommendations', subtitle: 'Testimonials',
            gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
            sections: [{ heading: 'Feedback', type: 'text', content: 'Trusted by founders and project managers for delivering business-minded creative solutions that actually convert.' }]
        },
        'projects': {
            title: 'Projects', subtitle: 'Case Studies',
            gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
            sections: [{ heading: 'Key Projects', type: 'text', content: 'Executed comprehensive Social Media Audits, Event Marketing Strategies, and tailored Content Calendars for niche brands.' }]
        },
        'contact': {
            title: 'Contact Me', subtitle: 'Let\'s Connect',
            gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
            sections: [
                { heading: '', type: 'text', content: 'Have an idea but no roadmap? Let’s build the strategy.' },
                { heading: 'Get in Touch', type: 'contact', items: [
                    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Avika Malik', link: '#' }
                ]}
            ]
        }
    },
    anchor: {
        'work-permit': {
            title: 'Work Permit', subtitle: 'Basic Details & Resume',
            gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
            sections: [{ heading: 'Positioning', type: 'text', content: 'Open for live hosting, event moderation, on-ground management, and team coordination.' }]
        },
        'skills-tools': {
            title: 'Skills', subtitle: 'Tools & Platforms',
            gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
            sections: [{ heading: 'Core Skills', type: 'tags', items: ['Public Speaking', 'Crowd Engagement', 'Event Management', 'Team Delegation', 'Scriptwriting', 'Under-Pressure Execution'] }]
        },
        'experience': {
            title: 'Experience', subtitle: 'Stage, Events & Leadership',
            gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
            sections: [{ heading: 'What I Do', type: 'text', content: '1+ year as a lead anchor and 3+ years in event crews. Handled live audiences, guest coordination, and real-time event troubleshooting for massive crowds.' }]
        },
        'certifications': {
            title: 'Certifications', subtitle: 'Training & Accolades',
            gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
            sections: [{ heading: 'Credentials', type: 'text', content: 'Stage-tested. Successfully managed and hosted major university events with thousands in attendance.' }]
        },
        'recommendations': {
            title: 'Recommendations', subtitle: 'Testimonials',
            gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
            sections: [{ heading: 'Feedback', type: 'text', content: 'Commended by university faculty, guest speakers, and event organizers for confidence, clear communication, and absolute stage presence.' }]
        },
        'projects': {
            title: 'Projects', subtitle: 'Case Studies',
            gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
            sections: [{ heading: 'Key Projects', type: 'text', content: 'Hosted CU Fest, Diwali Hunt 2.0, Freshers, cultural ceremonies, and high-profile guest sessions.' }]
        },
        'contact': {
            title: 'Contact Me', subtitle: 'Let\'s Connect',
            gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
            sections: [
                { heading: '', type: 'text', content: 'Need a voice that holds the room or a manager who handles the chaos? Let’s talk.' },
                { heading: 'Get in Touch', type: 'contact', items: [
                    { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                    { icon: 'fab fa-instagram', label: 'Instagram', value: '@avikamalik', link: '#' }
                ]}
            ]
        }
    }
};

const DETAILS = {
    'work-permit': {
        title: 'Work Permit', subtitle: 'Basic Details & Positioning',
        // 🎬 INSTRUCTIONS: To add a video background to this detail page, replace the path below with your video URL. 
        // Example: 'assets/videos/work-permit-bg.mp4'. If you don't want a video, you can leave it blank or remove the line.
        detailVideo: '', 
        gradient: 'linear-gradient(135deg, #182848 0%, #0a1128 100%)',
        sections: [
            { heading: 'Positioning', type: 'text', content: 'Social Media Manager | Creative Strategist | Content Creator | Editor | Videographer | Brand & Marketing' },
            { heading: 'What I Do', type: 'text', content: 'Someone who can take an idea/brand and turn it into a complete content + social media + marketing execution. I handle the whole creative + marketing side of a brand — strategy, content, social media, campaigns, editing, management.' },
            { heading: 'Experience', type: 'stats', items: [{ value: '3+', label: 'Years' }, { value: '5', label: 'Platforms' }, { value: '1+', label: 'Yr Anchoring' }] }
        ]
    },
    'certifications': {
        title: 'Certifications', subtitle: 'Training & Accolades',
        gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
        sections: [
            { heading: 'Certificates', type: 'list', items: ['Digital Marketing & Strategy', 'Social Media Management', 'Event Planning & Coordination', 'Creative Content Production'] }
        ]
    },
    'recommendations': {
        title: 'Recommendations', subtitle: 'What people say about my work',
        gradient: 'linear-gradient(135deg, #8e44ad 0%, #5b2c6f 100%)',
        sections: [
            { heading: 'Testimonials', type: 'subcards', items: [
                { title: 'Clients & Brands', desc: '"Avika doesn\'t just make posts, she understands the entire brand strategy." - (Client Testimonials coming soon)', tags: ['Strategy', 'Results'] },
                { title: 'Event Heads', desc: '"Exceptional team coordination and on-ground execution during CU Fest." - (Event Head)', tags: ['Leadership', 'Events'] }
            ]}
        ]
    },
    'projects': {
        title: 'Projects', subtitle: 'Case Studies & Client Work',
        gradient: 'linear-gradient(135deg, #e67e22 0%, #a04000 100%)',
        sections: [
            { heading: 'Case Studies', type: 'subcards', items: [
                { title: 'CU Fest', desc: 'Full event marketing — strategy, social media, execution.', tags: ['Event', 'Marketing'] },
                { title: 'Diwali Hunt 2.0', desc: 'Campaign strategy, promotion, team management.', tags: ['Campaign'] },
                { title: 'Social Media Projects', desc: 'Strategy, content planning, growth.', tags: ['Social Media'] }
            ]},
            { heading: 'Process', type: 'list', items: ['The Brand / Project → Problem → Objective → My Role → Strategy → Execution → Content → Result'] }
        ]
    },
    'music': {
        title: 'Music & Vibes', subtitle: 'What keeps me going',
        gradient: 'linear-gradient(135deg, #FF416C 0%, #8a233b 100%)',
        sections: [
            { heading: 'Interests', type: 'tags', items: ['Music', 'Fashion', 'Culture', 'Art'] },
            { heading: '', type: 'text', content: 'Creativity flows from culture. I stay updated with trends, music, and art to keep my brand concepts fresh.' }
        ]
    },
    'reading': {
        title: 'Reading', subtitle: 'Books & Knowledge',
        gradient: 'linear-gradient(135deg, #4b6cb7 0%, #1a2540 100%)',
        sections: [
            { heading: 'Interests', type: 'tags', items: ['Books', 'Psychology', 'Business', 'Marketing Strategy'] },
            { heading: '', type: 'text', content: 'I read to understand people and markets. Good marketing is just applied psychology.' }
        ]
    },
    'blogs': {
        title: 'Blogs', subtitle: 'Writing & Thoughts',
        gradient: 'linear-gradient(135deg, #11998e 0%, #0b534d 100%)',
        sections: [
            { heading: 'Thoughts On', type: 'tags', items: ['Marketing Opinions', 'Brand Strategy', 'Content Creation'] },
            { heading: '', type: 'text', content: 'Writing my thoughts on marketing and culture. (Substack / Blog links coming soon)' }
        ]
    },
    'cu-fest': {
        title: 'CU Fest', subtitle: 'Event Marketing · Team Coordination · Execution',
        gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
        sections: [
            { heading: 'My Role', type: 'tags', items: ['Event Marketing', 'Social Media Promotion', 'Creative Direction', 'Team Coordination', 'Audience Engagement', 'On-ground Management'] },
            { heading: 'What I Did', type: 'list', items: ['Planned social media strategy for event promotion', 'Coordinated teams across departments', 'Managed event creatives and content', 'Handled audience engagement throughout', 'Contributed to on-ground execution'] },
            { heading: 'Impact', type: 'stats', items: [{ value: '—', label: 'Reach' }, { value: '—', label: 'Engagement' }, { value: '—', label: 'Team Size' }, { value: '—', label: 'Attendance' }] }
        ]
    },
    'diwali-hunt': {
        title: 'Diwali Hunt 2.0', subtitle: 'Campaign Strategy · Social Media · Promotion',
        gradient: 'linear-gradient(135deg, #F4A020 0%, #4a3000 100%)',
        sections: [
            { heading: 'My Role', type: 'tags', items: ['Campaign Strategy', 'Social Media Promotion', 'Content Planning', 'Creative Execution', 'Team Coordination'] },
            { heading: 'What I Did', type: 'list', items: ['Developed campaign strategy and promotional content', 'Managed social media rollout and engagement', 'Coordinated with creative and execution teams', 'Planned content calendar for event buildup'] },
            { heading: 'Impact', type: 'stats', items: [{ value: '—', label: 'Reach' }, { value: '—', label: 'Engagement' }, { value: '—', label: 'Content Created' }, { value: '—', label: 'Attendance' }] }
        ]
    },
    'fresh-gen': {
        title: 'Fresh Gen Fiesta', subtitle: 'Event Management · Social Media · Coordination',
        gradient: 'linear-gradient(135deg, #00B4D8 0%, #003845 100%)',
        sections: [
            { heading: 'My Role', type: 'tags', items: ['Event Management', 'Social Media', 'Content Creation', 'Team Coordination', 'Promotion'] },
            { heading: 'What I Did', type: 'list', items: ['Managed event marketing and social presence', 'Created promotional content and creatives', 'Coordinated teams for smooth execution', 'Handled on-ground management'] },
            { heading: 'Impact', type: 'stats', items: [{ value: '—', label: 'Reach' }, { value: '—', label: 'Team Size' }, { value: '—', label: 'Content' }, { value: '—', label: 'Engagement' }] }
        ]
    },
    'abhivyakti': {
        title: 'Abhivyakti', subtitle: 'Creative Direction · Cultural Events · Marketing',
        gradient: 'linear-gradient(135deg, #9B59B6 0%, #2C0B3F 100%)',
        sections: [
            { heading: 'My Role', type: 'tags', items: ['Creative Direction', 'Event Marketing', 'Content Planning', 'Social Media', 'Cultural Events'] },
            { heading: 'What I Did', type: 'list', items: ['Creative direction for cultural events', 'Social media campaigns and content', 'Marketing collateral and audience engagement', 'Team coordination for event execution'] }
        ]
    },
    'social-projects': {
        title: 'Social Media Projects', subtitle: 'Strategy · Content · Growth',
        gradient: 'linear-gradient(135deg, #2ECC71 0%, #0B3B1E 100%)',
        sections: [
            { heading: 'Experience', type: 'tags', items: ['Account Management', 'Content Strategy', 'Content Calendars', 'Reels Planning', 'Caption Writing', 'Campaign Planning', 'Audience Engagement', 'Trend Research', 'Competitor Analysis', 'Visual Identity'] },
            { heading: 'Approach', type: 'list', items: ['Research → Strategy → Content Plan → Execute → Analyze → Optimize', 'Cross-platform adaptation (not just reposting)', 'Platform-specific audience understanding', 'Data-driven decisions with creative instinct'] },
            { heading: 'Numbers', type: 'stats', items: [{ value: '5', label: 'Platforms' }, { value: '3+', label: 'Years' }, { value: '—', label: 'Accounts' }, { value: '—', label: 'Content Created' }] }
        ]
    },
    'brand-concepts': {
        title: 'Brand Concepts', subtitle: 'Ideation · Positioning · Visual Direction',
        gradient: 'linear-gradient(135deg, #E74C8B 0%, #4A1530 100%)',
        sections: [
            { heading: 'What I Do', type: 'tags', items: ['Brand Positioning', 'Visual Direction', 'Content Pillars', 'Brand Voice', 'Moodboards', 'Campaign Concepts', 'Storytelling', 'Creative Strategy'] },
            { heading: 'Approach', type: 'list', items: ['Understand brand, audience, and market', 'Define content pillars and brand voice', 'Create visual direction and moodboards', 'Plan content strategy for business goals', 'Execute consistently across touchpoints'] },
            { heading: '', type: 'text', content: 'I don\'t just make content — I build the creative framework a brand needs to communicate effectively.' }
        ]
    },
    'svc-social': {
        title: 'Social Media', subtitle: 'Strategy · Management · Growth',
        gradient: 'linear-gradient(135deg, #1877F2 0%, #061E3D 100%)',
        sections: [
            { heading: 'Services', type: 'tags', items: ['Social Media Management', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Pinterest', 'Content Planning', 'Content Calendars', 'Community Management', 'Audience Engagement', 'Social Media Audits', 'Growth Strategy'] },
            { heading: 'Platforms', type: 'tags', items: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'Pinterest'] },
            { heading: '', type: 'text', content: 'Cross-platform content adaptation — not just reposting everywhere. Each platform has its own language, audience, and algorithm.' }
        ]
    },
    'svc-content': {
        title: 'Creative & Content', subtitle: 'Ideation · Creation · Direction',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #3D0F0F 100%)',
        sections: [
            { heading: 'Services', type: 'tags', items: ['Creative Strategy', 'Content Strategy', 'Content Ideation', 'Creative Direction', 'Campaign Concepts', 'Storytelling', 'Copywriting', 'Scriptwriting', 'Reels', 'Short-form Content', 'Static Posts', 'Carousels', 'Visual Concepts'] },
            { heading: '', type: 'text', content: 'Content that connects, not just content that exists. Every piece serves a purpose — brand, engagement, or action.' }
        ]
    },
    'svc-video': {
        title: 'Video Production', subtitle: 'Shoot · Edit · Deliver',
        gradient: 'linear-gradient(135deg, #6C5CE7 0%, #1A0F3D 100%)',
        sections: [
            { heading: 'Services', type: 'tags', items: ['Videography', 'Video Editing', 'Reels Editing', 'Short-form Video', 'Cinematic Content', 'Product/Brand Videos', 'Concept Videos', 'Photography'] },
            { heading: '', type: 'text', content: 'From concept to final cut. Clean edits, strong concepts, visual storytelling.' }
        ]
    },
    'svc-marketing': {
        title: 'Marketing', subtitle: 'Brand · Campaign · Research',
        gradient: 'linear-gradient(135deg, #00B894 0%, #002E24 100%)',
        sections: [
            { heading: 'Services', type: 'tags', items: ['Brand Strategy', 'Brand Positioning', 'Campaign Strategy', 'Campaign Planning', 'Audience Research', 'Competitor Research', 'Trend Research', 'Influencer Coordination', 'Digital Marketing'] },
            { heading: '', type: 'text', content: 'Marketing is understanding people, markets, and timing. Creative instinct + strategic thinking.' }
        ]
    },
    'svc-strategy': {
        title: 'Strategy', subtitle: 'Positioning · Planning · Growth',
        gradient: 'linear-gradient(135deg, #F39C12 0%, #3D2500 100%)',
        sections: [
            { heading: 'Strategy Skills', type: 'tags', items: ['Brand Positioning', 'Content Pillars', 'Content Strategy', 'Audience Research', 'Competitor Research', 'Trend Analysis', 'Campaign Ideation', 'Social Media Audits', 'Content Calendars', 'Storytelling', 'Brand Voice', 'Visual Direction', 'Growth Strategy', 'Community Building', 'Engagement Strategy'] },
            { heading: '', type: 'text', content: 'I don\'t just make posts — I build the thinking behind them.' }
        ]
    },
    'svc-management': {
        title: 'Management', subtitle: 'Projects · Events · Teams',
        gradient: 'linear-gradient(135deg, #636E72 0%, #1a1d1e 100%)',
        sections: [
            { heading: 'Services', type: 'tags', items: ['Project Management', 'Team Management', 'Client Management', 'Event Management', 'Team Coordination', 'Vendor Coordination', 'Campaign Execution', 'Event Promotion'] },
            { heading: 'How I Work', type: 'list', items: ['Clear communication and deadline management', 'Coordinating creative and execution teams', 'Taking ownership from brief to delivery', 'Handling pressure without dropping quality'] }
        ]
    },
    'about': {
        title: 'About Me', subtitle: 'The person behind the work',
        gradient: 'linear-gradient(135deg, #E17055 0%, #3D1510 100%)',
        sections: [
            { heading: '', type: 'text', content: 'Computer Science student. But my real work lives in marketing, content, and creative strategy. 3+ years handling brands, projects, events, teams, and platforms.' },
            { heading: 'What Defines Me', type: 'tags', items: ['Creative', 'Strategic', 'Business-minded', 'Execution-focused', 'Trend-aware', 'Creative + Operational'] },
            { heading: 'Interests', type: 'tags', items: ['Marketing', 'Branding', 'Creative Strategy', 'Fashion', 'Culture', 'Psychology', 'Business', 'Film & Content', 'Art'] },
            { heading: '', type: 'text', content: 'I take an idea or brand and turn it into complete content + social media + marketing execution.' }
        ]
    },
    'experience': {
        title: 'Experience', subtitle: '3+ years of real, hands-on work',
        gradient: 'linear-gradient(135deg, #0984E3 0%, #02243B 100%)',
        sections: [
            { heading: 'Social Media & Marketing', type: 'list', items: ['Managing accounts across 5 platforms', 'Content strategies and calendars', 'Reels planning, captions, copy', 'Campaign planning and execution', 'Audience engagement and community management', 'Trend and competitor research', 'Visual identity and brand voice', 'Client and team communication'] },
            { heading: 'Event Management', type: 'list', items: ['Event marketing and promotion', 'Team coordination across departments', 'Event planning and on-ground execution', 'Managing creatives and materials', 'Guest coordination and logistics', 'Anchoring events for 1+ year'] },
            { heading: 'Key Numbers', type: 'stats', items: [{ value: '3+', label: 'Years' }, { value: '10+', label: 'Events' }, { value: '5', label: 'Platforms' }, { value: '1+', label: 'Yr Anchoring' }] }
        ]
    },
    'skills-tools': {
        title: 'Skills & Tools', subtitle: 'What I work with every day',
        gradient: 'linear-gradient(135deg, #00CEC9 0%, #003634 100%)',
        sections: [
            { heading: 'Tools & Software', type: 'tools', items: [
                { name: 'Canva', icon: 'fas fa-paint-brush' },
                { name: 'CapCut', icon: 'fas fa-film' },
                { name: 'Photoshop', icon: 'fas fa-image' },
                { name: 'Premiere Pro', icon: 'fas fa-video' },
                { name: 'After Effects', icon: 'fas fa-magic' },
                { name: 'Lightroom', icon: 'fas fa-camera' },
                { name: 'Meta Business Suite', icon: 'fab fa-meta' },
                { name: 'YouTube Studio', icon: 'fab fa-youtube' },
                { name: 'Notion', icon: 'fas fa-clipboard' },
                { name: 'Google Workspace', icon: 'fab fa-google' }
            ]},
            { heading: 'Platforms', type: 'tools', items: [
                { name: 'Instagram', icon: 'fab fa-instagram' },
                { name: 'Facebook', icon: 'fab fa-facebook' },
                { name: 'YouTube', icon: 'fab fa-youtube' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin' },
                { name: 'Pinterest', icon: 'fab fa-pinterest' }
            ]}
        ]
    },
    'events': {
        title: 'Events & Leadership', subtitle: 'On-ground execution, not just planning',
        gradient: 'linear-gradient(135deg, #FD79A8 0%, #4A1A30 100%)',
        sections: [
            { heading: 'Events', type: 'subcards', items: [
                { title: 'CU Fest', desc: 'Full-scale university festival — marketing, promotion, coordination.', tags: ['Marketing', 'Coordination'] },
                { title: 'Diwali Hunt 2.0', desc: 'Campaign strategy, social media, team management.', tags: ['Campaign', 'Social Media'] },
                { title: 'Fresh Gen Fiesta', desc: 'Event marketing, content creation, management.', tags: ['Content', 'Events'] },
                { title: 'Abhivyakti', desc: 'Creative direction, cultural event marketing.', tags: ['Creative', 'Cultural'] },
                { title: 'Literary & Cultural Events', desc: 'Marketing, coordination, and engagement.', tags: ['Marketing'] },
                { title: 'Other Campaigns', desc: 'Various marketing campaigns at CU.', tags: ['Campaigns'] }
            ]},
            { heading: 'Leadership', type: 'tags', items: ['Team Coordination', 'Managing People', 'Delegating Work', 'Handling Deadlines', 'Working Under Pressure', 'Client Communication', 'Taking Ownership'] }
        ]
    },
    'anchoring': {
        title: 'Anchoring & Communication', subtitle: '1+ year of stage experience',
        gradient: 'linear-gradient(135deg, #A29BFE 0%, #2D1B69 100%)',
        sections: [
            { heading: 'Events Anchored', type: 'tags', items: ['Freshers', 'Modelling Events', 'College Festivals', 'Cultural Events', 'Formal Ceremonies', 'Guest Sessions'] },
            { heading: 'What This Shows', type: 'list', items: ['Strong communication and confidence', 'Audience handling and engagement', 'Adaptability across event types', 'Professional stage presence', 'Quick thinking under pressure'] }
        ]
    },
    'contact': {
        title: 'Let\'s Build Something', subtitle: 'Have a brand, project or idea?',
        gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
        sections: [
            { heading: '', type: 'text', content: 'Whether you need a social media strategy, creative direction, content execution, or end-to-end brand management — let\'s make it happen.' },
            { heading: 'Get in Touch', type: 'contact', items: [
                { icon: 'fas fa-envelope', label: 'Email', value: 'hello@avikamalik.com', link: 'mailto:hello@avikamalik.com' },
                { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Avika Malik', link: '#' },
                { icon: 'fab fa-instagram', label: 'Instagram', value: '@avikamalik', link: '#' },
                { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: 'Message Me', link: '#' }
            ]},
            { heading: 'Send a Message', type: 'form' }
        ]
    },
    'work': {
        title: 'My Work', subtitle: 'Real projects. Real execution.',
        gradient: 'linear-gradient(135deg, #E50914 0%, #3d0207 100%)',
        sections: [
            { heading: 'Projects', type: 'subcards', items: [
                { title: 'CU Fest', desc: 'Full event marketing — strategy, social media, execution.', tags: ['Event', 'Marketing'] },
                { title: 'Diwali Hunt 2.0', desc: 'Campaign strategy, promotion, team management.', tags: ['Campaign'] },
                { title: 'Fresh Gen Fiesta', desc: 'Event marketing, content, on-ground management.', tags: ['Content', 'Events'] },
                { title: 'Abhivyakti', desc: 'Creative direction and cultural event marketing.', tags: ['Creative'] },
                { title: 'Social Media Projects', desc: 'Strategy, content planning, growth.', tags: ['Social Media'] },
                { title: 'Brand Concepts', desc: 'Brand positioning, visual direction.', tags: ['Branding'] }
            ]},
            { heading: '', type: 'text', content: 'More case studies with analytics and results will be added as project data is shared.' }
        ]
    },
    'services-nav': {
        title: 'Services', subtitle: 'Everything I bring to the table',
        gradient: 'linear-gradient(135deg, #1877F2 0%, #061E3D 100%)',
        sections: [
            { heading: 'Social Media', type: 'tags', items: ['Social Media Management', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Pinterest', 'Content Planning', 'Calendars', 'Community Management', 'Audience Engagement', 'Audits', 'Growth Strategy'] },
            { heading: 'Creative & Content', type: 'tags', items: ['Creative Strategy', 'Content Ideation', 'Creative Direction', 'Campaign Concepts', 'Storytelling', 'Copywriting', 'Scriptwriting', 'Reels', 'Short-form', 'Static Posts', 'Carousels'] },
            { heading: 'Video', type: 'tags', items: ['Videography', 'Video Editing', 'Reels Editing', 'Short-form Video', 'Cinematic Content', 'Product Videos', 'Photography'] },
            { heading: 'Marketing', type: 'tags', items: ['Brand Strategy', 'Brand Positioning', 'Campaign Strategy', 'Audience Research', 'Competitor Research', 'Trend Research', 'Influencer Coordination', 'Digital Marketing'] },
            { heading: 'Management', type: 'tags', items: ['Project Management', 'Team Management', 'Client Management', 'Event Management', 'Vendor Coordination', 'Campaign Execution'] }
        ]
    }
};


/* ══════════════════════════════════════
   DOM REFERENCES
   ══════════════════════════════════════ */
const $ = (id) => document.getElementById(id);

const screenIntro    = $('screen-intro');
const screenProfiles = $('screen-profiles');
const screenBrowse   = $('screen-browse');
const introOverlay   = $('intro-overlay');
const introName      = $('intro-name');
const introAudio     = $('intro-audio');
const profilesGrid   = $('profiles-grid');
const navbar         = $('navbar');
const hamburger      = $('hamburger');
const mobileNav      = $('mobile-nav');
const mobileNavClose = $('mobile-nav-close');
const rowsWrap       = $('rows-wrap');
const detailOverlay  = $('detail-overlay');
const detailBack     = $('detail-back');
const detailHero     = $('detail-hero');
const detailHeroGrad = $('detail-hero-grad');
const detailTitle    = $('detail-title');
const detailSubtitle = $('detail-subtitle');
const detailBody     = $('detail-body');
const navProfileWrap = $('nav-profile-wrap');
const navProfileImg  = $('nav-profile-img');
const navProfileFB   = $('nav-profile-fallback');
const navLogo        = $('nav-logo');

let currentProfile = 'everything';
let currentProfileImage = '';


/* ══════════════════════════════════════
   SCREEN TRANSITIONS
   ══════════════════════════════════════ */
function switchScreen(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.add('active');
        if (to === screenBrowse) {
            document.body.style.overflow = 'auto';
        }
    }, 150);
}


/* ══════════════════════════════════════
   INTRO — Zoom + Fade to Black
   ══════════════════════════════════════ */
function initIntro() {
    // Try to play background music immediately
    if (introAudio) {
        introAudio.volume = 0.6;
        introAudio.play().catch(() => {
            console.log("Autoplay blocked by browser. Continuing without audio.");
        });
    }

    // After zoom animation, fade to black then switch screen
    setTimeout(() => {
        introOverlay.classList.add('fade-black');
        introName.style.opacity = '0';
        introName.style.transition = 'opacity 0.8s ease';
    }, CONFIG.introDuration);

    setTimeout(() => {
        switchScreen(screenIntro, screenProfiles);
        // Fade out audio if playing
        if (introAudio && !introAudio.paused) {
            let vol = introAudio.volume;
            const fadeAudio = setInterval(() => {
                vol -= 0.05;
                if (vol <= 0) {
                    introAudio.pause();
                    clearInterval(fadeAudio);
                } else {
                    introAudio.volume = vol;
                }
            }, 50);
        }
    }, CONFIG.introDuration + 1000);
}


/* ══════════════════════════════════════
   PROFILE SELECTION
   ══════════════════════════════════════ */
function initProfiles() {
    const cards = profilesGrid.querySelectorAll('.profile-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            currentProfile = card.getAttribute('data-profile');

            // Get profile image
            const img = card.querySelector('.profile-img');
            if (img && img.style.display !== 'none' && img.naturalWidth > 0) {
                currentProfileImage = img.src;
            } else {
                currentProfileImage = '';
            }

            // Animate selection
            card.style.transform = 'scale(1.15)';
            card.querySelector('.profile-avatar').style.borderColor = '#fff';
            
            // Update Hero Text dynamically based on profile
            const heroData = PROFILE_HERO[currentProfile] || PROFILE_HERO.default;
            const taglineEl = document.getElementById('hero-tagline');
            const descEl = document.getElementById('hero-desc');
            if (taglineEl) taglineEl.textContent = heroData.tagline;
            if (descEl) descEl.textContent = heroData.desc;

            setTimeout(() => {
                switchScreen(screenProfiles, screenBrowse);
                updateNavProfile();
                renderRows();
                initScrollReveal();
            }, 500);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') card.click();
        });
    });
}

function updateNavProfile() {
    if (currentProfileImage) {
        navProfileImg.src = currentProfileImage;
        navProfileImg.style.display = 'block';
        navProfileFB.style.display = 'none';
    } else {
        navProfileImg.style.display = 'none';
        navProfileFB.style.display = 'block';
    }
}


/* ══════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════ */
function initNavbar() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page === 'home') {
                closeDetail();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                openDetail(page);
            }
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Mobile nav
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mobileNav.classList.remove('open');
            const page = link.getAttribute('data-page');
            if (page === 'home') {
                closeDetail();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                openDetail(page);
            }
        });
    });

    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));

    // Logo → home
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        closeDetail();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Profile switch → back to profiles
    navProfileWrap.addEventListener('click', () => {
        closeDetail();
        screenBrowse.classList.remove('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => screenProfiles.classList.add('active'), 150);
    });

    // Footer contact
    const footerLink = $('footer-contact-link');
    if (footerLink) {
        footerLink.addEventListener('click', (e) => {
            e.preventDefault();
            openDetail('contact');
        });
    }
}


/* ══════════════════════════════════════
   RENDER ROWS — Profile-specific
   ══════════════════════════════════════ */
function renderRows() {
    rowsWrap.innerHTML = '';
    const rows = PROFILE_ROWS[currentProfile] || PROFILE_ROWS.everything;

    rows.forEach((row, rowIndex) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'content-row scroll-reveal';

        rowEl.innerHTML = `
            <h2 class="row-title">${row.title}</h2>
            <div class="row-scroll-wrap">
                <button class="row-arrow left" data-dir="left"><i class="fas fa-chevron-left"></i></button>
                <div class="row-cards"></div>
                <button class="row-arrow right" data-dir="right"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;

        rowsWrap.appendChild(rowEl);
        const cardsContainer = rowEl.querySelector('.row-cards');

        row.cardIds.forEach((cardId, ci) => {
            const cardData = CARDS[cardId];
            if (!cardData) return;

            const cardEl = document.createElement('div');
            cardEl.className = 'card card-animate';
            cardEl.setAttribute('data-id', cardId);
            cardEl.style.animationDelay = `${ci * 0.08}s`;

            cardEl.innerHTML = `
                <div class="card-bg" style="background: ${cardData.fallback}; background-image: url('${cardData.image}')"></div>
                <div class="card-overlay"></div>
                <i class="${cardData.icon} card-icon"></i>
                <div class="card-text">
                    <div class="card-title">${cardData.title}</div>
                    <div class="card-sub">${cardData.sub}</div>
                </div>
            `;

            cardEl.addEventListener('click', () => openDetail(cardId));
            cardsContainer.appendChild(cardEl);
        });

        // Arrow scrolling
        rowEl.querySelectorAll('.row-arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                const dir = arrow.getAttribute('data-dir');
                cardsContainer.scrollBy({ left: dir === 'left' ? -500 : 500, behavior: 'smooth' });
            });
        });
    });
}


/* ══════════════════════════════════════
   SCROLL REVEAL — Intersection Observer
   ══════════════════════════════════════ */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════
   DETAIL PAGE
   ══════════════════════════════════════ */
function openDetail(sectionId) {
    // Get profile-specific data first, otherwise use generic data
    const data =
        (PROFILE_DETAILS[currentProfile] &&
            PROFILE_DETAILS[currentProfile][sectionId]) ||
        DETAILS[sectionId];

    if (!data) return;

    detailTitle.textContent = data.title;
    detailSubtitle.textContent = data.subtitle;
    detailHeroGrad.style.background = data.gradient;

    // Video background handling
    const detailVideo = document.getElementById('detail-video');

    if (data.detailVideo) {
        detailVideo.src = data.detailVideo;
        detailVideo.style.display = 'block';
    } else {
        detailVideo.src = '';
        detailVideo.style.display = 'none';
    }

    let html = '';

    // Copy sections so we don't modify PROFILE_DETAILS permanently
    let sections = [...data.sections];

    /*
     * CONTACT FORM
     * Automatically add the enquiry form to every Contact Me page.
     * Any old form inside the data is removed first to prevent duplicates.
     */
    if (sectionId === 'contact') {
        sections = sections.filter(section => section.type !== 'form');

        sections.push({
            heading: 'Send an Enquiry',
            type: 'form'
        });
    }

    sections.forEach(section => {
        html += '<div class="detail-section">';

        if (section.heading) {
            html += `<h3 class="detail-section-title">${section.heading}</h3>`;
        }

        switch (section.type) {

            case 'tags':
                html += '<div class="detail-tags">' +
                    section.items
                        .map(i => `<span class="detail-tag">${i}</span>`)
                        .join('') +
                    '</div>';
                break;

            case 'list':
                html += '<ul class="detail-list">' +
                    section.items
                        .map(i => `<li>${i}</li>`)
                        .join('') +
                    '</ul>';
                break;

            case 'stats':
                html += '<div class="detail-stats-row">' +
                    section.items.map(i => `
                        <div class="detail-stat">
                            <div class="detail-stat-val">${i.value}</div>
                            <div class="detail-stat-label">${i.label}</div>
                        </div>
                    `).join('') +
                    '</div>';
                break;

            case 'text':
                html += `<p class="detail-text">${section.content}</p>`;
                break;

            case 'tools':
                html += '<div class="detail-tools-grid">' +
                    section.items.map(i => `
                        <div class="detail-tool">
                            <i class="${i.icon}"></i>
                            <span>${i.name}</span>
                        </div>
                    `).join('') +
                    '</div>';
                break;

            case 'subcards':
                html += '<div class="detail-sub-cards">' +
                    section.items.map(i => `
                        <div class="detail-sub-card">
                            <h3>${i.title}</h3>
                            <p>${i.desc}</p>
                            <div class="sub-card-tags">
                                ${i.tags.map(t =>
                                    `<span class="sub-card-tag">${t}</span>`
                                ).join('')}
                            </div>
                        </div>
                    `).join('') +
                    '</div>';
                break;

            case 'contact':
                html += '<div class="contact-grid">' +
                    section.items.map(i => `
                        <a href="${i.link}"
                           class="contact-card"
                           target="_blank"
                           rel="noopener">

                            <i class="${i.icon}"></i>

                            <div>
                                <span class="contact-card-label">
                                    ${i.label}
                                </span><br>

                                <span class="contact-card-value">
                                    ${i.value}
                                </span>
                            </div>

                        </a>
                    `).join('') +
                    '</div>';
                break;

            case 'form':
                html += `
                    <div class="enquiry-form-wrapper">

                        <div class="enquiry-intro">
                            <p>
                                Tell me about your project and I'll get back
                                to you to discuss the next steps.
                            </p>
                        </div>

                        <form class="contact-form" id="contact-form">

                            <div class="form-row">

                                <div class="form-field">
                                    <label for="enquiry-name">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="enquiry-name"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                    >
                                </div>

                                <div class="form-field">
                                    <label for="enquiry-phone">
                                        Contact Number
                                    </label>

                                    <input
                                        type="tel"
                                        id="enquiry-phone"
                                        name="phone"
                                        placeholder="Your Contact Number"
                                        required
                                    >
                                </div>

                            </div>


                            <div class="form-row">

                                <div class="form-field">
                                    <label for="enquiry-email">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="enquiry-email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                    >
                                </div>

                                <div class="form-field">
                                    <label for="project-genre">
                                        Project Genre
                                    </label>

                                    <select
                                        id="project-genre"
                                        name="projectGenre"
                                        required
                                    >
                                        <option value="">
                                            Select Project Genre
                                        </option>

                                        <option value="Social Media Management">
                                            Social Media Management
                                        </option>

                                        <option value="Content Creation">
                                            Content Creation
                                        </option>

                                        <option value="Video Editing">
                                            Video Editing
                                        </option>

                                        <option value="Videography">
                                            Videography
                                        </option>

                                        <option value="Graphic Design">
                                            Graphic Design
                                        </option>

                                        <option value="Branding">
                                            Branding
                                        </option>

                                        <option value="Digital Marketing">
                                            Digital Marketing
                                        </option>

                                        <option value="Event Management">
                                            Event Management
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                            </div>


                            <div class="form-row">

                                <div class="form-field">
                                    <label for="preferred-date">
                                        Preferred Date
                                    </label>

                                    <input
                                        type="date"
                                        id="preferred-date"
                                        name="preferredDate"
                                        required
                                    >
                                </div>

                                <div class="form-field">
                                    <label for="preferred-time">
                                        Preferred Time
                                    </label>

                                    <input
                                        type="time"
                                        id="preferred-time"
                                        name="preferredTime"
                                        required
                                    >
                                </div>

                            </div>


                            <div class="form-field">
                                <label for="project-description">
                                    Project Description
                                </label>

                                <textarea
                                    id="project-description"
                                    name="description"
                                    rows="5"
                                    placeholder="Describe your project, goals, requirements, budget, timeline, etc."
                                    required
                                ></textarea>
                            </div>


                            <div class="form-field">
                                <label for="project-message">
                                    Message
                                </label>

                                <textarea
                                    id="project-message"
                                    name="message"
                                    rows="4"
                                    placeholder="Anything else you'd like me to know?"
                                    required
                                ></textarea>
                            </div>


                            <button
                                type="submit"
                                id="form-submit-btn"
                                class="enquiry-submit"
                            >
                                <i class="fas fa-paper-plane"></i>
                                Send Enquiry
                            </button>


                            <div id="form-message"></div>

                        </form>

                    </div>
                `;
                break;
        }

        html += '</div>';
    });

    detailBody.innerHTML = html;

    // Attach enquiry form handler
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', handleContactSubmit);
    }

    // Show detail overlay
    detailOverlay.classList.remove('hidden');

    requestAnimationFrame(() => {
        detailOverlay.classList.add('visible');
    });

    detailOverlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}
function closeDetail() {
    detailOverlay.classList.remove('visible');

    setTimeout(() => {
        detailOverlay.classList.add('hidden');

        // Show Browse screen again
        screenBrowse.classList.add('active');

        // Restore scrolling
        document.body.style.overflow = 'auto';

        // Reset detail page scroll
        detailOverlay.scrollTop = 0;
    }, 500);
}
function initDetail() {

    if (detailBack) {
        detailBack.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            closeDetail();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetail();
        }
    });
}


/* ══════════════════════════════════════
   CONTACT FORM — MongoDB + Email
   ══════════════════════════════════════ */
/* ══════════════════════════════════════
   CONTACT ENQUIRY FORM
   ══════════════════════════════════════ */

async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const btn = document.getElementById('form-submit-btn');
    const msgDiv = document.getElementById('form-message');

    const data = {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        projectGenre: form.projectGenre.value,
        preferredDate: form.preferredDate.value,
        preferredTime: form.preferredTime.value,
        description: form.description.value.trim(),
        message: form.message.value.trim()
    };

    // Basic validation
    if (
        !data.name ||
        !data.phone ||
        !data.email ||
        !data.projectGenre ||
        !data.preferredDate ||
        !data.preferredTime ||
        !data.description ||
        !data.message
    ) {
        msgDiv.innerHTML = `
            <div class="form-message error">
                Please fill in all required fields.
            </div>
        `;
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Sending...
    `;

    msgDiv.innerHTML = '';

    try {

        const res = await fetch(CONFIG.contactAPI, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok && result.success) {

            msgDiv.innerHTML = `
                <div class="form-message success">
                    <i class="fas fa-check-circle"></i>
                    Enquiry sent successfully! I'll get back to you soon.
                </div>
            `;

            form.reset();

        } else {

            throw new Error(
                result.error || 'Something went wrong'
            );
        }

    } catch (err) {

        console.error('Contact form error:', err);

        msgDiv.innerHTML = `
            <div class="form-message error">
                <i class="fas fa-exclamation-circle"></i>
                Could not send enquiry. Please try again later.
            </div>
        `;
    }

    btn.disabled = false;

    btn.innerHTML = `
        <i class="fas fa-paper-plane"></i>
        Send Enquiry
    `;
}
/* ══════════════════════════════════════
   INITIALIZE
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    initIntro();
    initProfiles();
    initNavbar();
    initDetail();
});
