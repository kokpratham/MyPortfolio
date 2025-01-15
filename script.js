document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (document.body.classList.contains('dark')) {
            themeIcon.setAttribute('name', 'sun');
        } else {
            themeIcon.setAttribute('name', 'moon');
        }
    }

    updateThemeIcon();

    // Typed.js initialization
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 2000
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skills section
    const skills = [
        "Data Structures", "CSS", "DBMS (fundamentals)", "EXCEL", "HTML",
        "Javascript", "Machine Learning", "MySQL", "Pandas",
        "Python", "Scikit-Learn", "React.js", "Node.js", "Git",
        "Blockchain", "Solidity", "TensorFlow", "Docker"
    ];

    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            skillCard.textContent = skill;
            skillsGrid.appendChild(skillCard);
        });
    }

    // Projects section
    const projects = [
        {
            title: "Student Leave Management System",
            description: "A web-based system to automate leave request and approval process, reducing approval time by 50%.",
            tech: ["React", "Node.js", "MySQL"],
            github: "#",
            demo: "#"
        },
        {
            title: "Emotion-Based Music Recommendation",
            description: "System that suggests music based on real-time analysis of users' facial expressions with 90% accuracy.",
            tech: ["Python", "Machine Learning", "Computer Vision"],
            github: "#",
            demo: "#"
        },
        {
            title: "AI-Driven Research Engine",
            description: "Legal research assistant achieving 30% reduction in research time for commercial court cases.",
            tech: ["NLP", "Machine Learning", "Python"],
            github: "#",
            demo: "#"
        },
        {
            title: "Blockchain-based Supply Chain Tracker",
            description: "Developed a decentralized application for tracking product authenticity and supply chain transparency.",
            tech: ["Solidity", "Ethereum", "Web3.js", "React"],
            github: "#",
            demo: "#"
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="button outline">GitHub</a>
                    <a href="${project.demo}" class="button outline">Demo</a>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Experience section
    const experiences = [
        {
            title: "Media & Marketing Head",
            company: "Algorand Blockchain Club",
            period: "July 2024 - June 2025",
            description: "Led media and marketing initiatives for blockchain technology promotion at MMCOE."
        },
        {
            title: "Smart India Hackathon Achievement",
            company: "Top 5 Placement",
            period: "2023 - 2024",
            description: "Achieved top 5 placement in College for Smart India Hackathon."
        },
        {
            title: "Machine Learning Intern",
            company: "TechInnovate Solutions",
            period: "May 2023 - August 2023",
            description: "Developed and implemented machine learning models for predictive analytics in finance."
        },
        {
            title: "Open Source Contributor",
            company: "Various Projects",
            period: "2022 - Present",
            description: "Active contributor to open-source projects in AI and blockchain domains."
        }
    ];

    const timeline = document.querySelector('.timeline');
    if (timeline) {
        experiences.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item', index % 2 === 0 ? 'left' : 'right');
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                    <span class="date">${exp.period}</span>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());
            console.log('Form submitted:', formObject);
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
});

