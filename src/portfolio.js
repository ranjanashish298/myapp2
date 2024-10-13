// --- 🎨 Site Styling ---

const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Ashish Ranjan",
    message: "A Computer Science student who loves to tinker with code and studying Cybersecurity as a minor. When I'm not studying, I'm helping fellow International students navigate University life. Sometimes I write as well!",
    basedLocation: "Mannheim, Germany",
    resumeLink: "https://docs.google.com/document/d/1n-HXpKmiFmvkQ4mBvzkudXqQLu4CDpxE/edit?usp=sharing&ouid=114680163147912543250&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/ranjanashish298",
    linkedin: "https://www.linkedin.com/in/ashish-ranjan-796386241/",
    medium: "https://medium.com/",
    stackoverflow: "",
    xtwitter: "https://twitter.com/"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I'm a computer science student at the Hochschule Worms. I have a keen interest in Software Development and also passionate about Cybersecurity. With skills in programming languages like C, Java, I also work with web technologies and have hands-on experience with frameworks such as Vue and Express.",
        "Dedicated, proactive, and always curious, I thrive both in solo projects and as part of a team. I've been coding for over two years and have an experience in development for big Enterprises. Besides my technical pursuits, I serve as a mentor for International students at my University, helping them adjust and succeed in a new environment. Currently, I am enhancing my skills as a Cloud Developer at SAP, focusing on building robust and secure applications."
    ], // Separated items are paragraphs
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software Developer (Werkstudent)",
        company: {
            name: "SAP",
            link: "https://www.sap.com/germany/index.html"
        },
        duration: "Sept 2022 - Present",
        bulletPoints: [
            "Led the E2E UIVeri5 Tests migration to a new framework WDI5, becoming one of the first teams at SAP to implement full-scale migration.",
            "Extended UI and backend services on SAP BTP using the Kyma environment.",
            "Automated a suite of negative security tests running nightly on Jenkins, enhancing security protocols.",
            "In the buzzing times of AI, got a chance to integrate an AI Unit Test Code Generator Tool (SAP specific) to generate code for Unit Tests."

        ],
        hashtags: [
            "Javascript",
            "Java",
            "Jenkins",
            "SAP BTP",
            "SAP UI5",
            "Shell-Scripting",
            "Groovy", 
            "many more..."
        ]
    },
    {
        position: "HiWi",
        company: {
            name: "Hochschule Worms",
            link: "https://www.hs-worms.de/international/international-center"
        },
        duration: "Aug 2024 - Present",
        bulletPoints: [
            "Supervision of incoming International students.",
            "Administrative Support and Management activities."
        ],
        hashtags: [
            "Management",
            "International-Relations",
            "Administration"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Uiveri5 to WDI5 migration",
        yearCompleted: "2022",
        description: "Right in the beginning of 2022, UIVeri5 got deprecated. Major technical reasons were its' deprecated Protractor code base and its' limited parallel execution functionality. Wdi5 came here as a rescue!",
        techStack: "Webdriver Automation, Javascript",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/ranjanashish298/uiveri5-to-wdi5"
            },
            {
                label: "",
                type: "external",
                url: "https://docs.google.com/document/d/e/2PACX-1vQRZhpM3-WK1jjB3D4ZyACdlfW-nYvpn00fub4goQD3-MUSF-40PngXA0Rj6puCRsQ4C9oq-QyAn8FA/pub"
            }
        ],
        imageLink: "images/uiveri5.png",
        alignLeft: false
    },
    {
        projectName: "Automated Security Tests",
        yearCompleted: "2024",
        description: "The objective of this project was to create an automated test suite for the negative tests (that were previously written on Postman and manually excecuted) with the help of Groovy scripts and curl commands that would later be integrated in the pipeline for the nighty builds.",
        techStack: "Groovy, Shell-Scripting, Jenkins(CI/CD)",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/ranjanashish298/automated-security"
            },
            {
                label: "",
                type: "external",
                url: "https://docs.google.com/document/d/e/2PACX-1vTOGenLaVLj69VWdeB2KYtRM6SFJ31yzIXHpYsJHTwR0Ot2HGCl0RSt8fymJaQ8ndRwfKzYMr8xT8Lz/pub"
            }
        ],
        imageLink: "images/security.png",
        alignLeft: false
    },
    {
        projectName: "U2 Band Fan Website",
        yearCompleted: "2024",
        description: "Made a fan based website for the U2 Band as a web developement project at university using HTML, CSS3, JavaScript.",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/ranjanashish298/web-entwicklung-project"
            },
            {
                label: "",
                type: "external",
                url: "https://docs.google.com/document/d/e/2PACX-1vT5kOwlp9Z_QB957Ki4PnakS0a7O6Ka9tSaIh1trzUFkwokod6KF7rUZRejFMEH82TUAEUPBtjWSZoJ/pub" 
            }
        ],
        imageLink: "images/u2.png",
        alignLeft: true
    },
    {
        projectName: "MIPS Assembly Project",
        yearCompleted: "2023",
        description: "This project contains a MIPS assembly project that implements a German IBAN calculator. The application converts a German bank account number (Kontonummer, KNR) and bank code (Bankleitzahl, BLZ) to a standardized IBAN format, and can also extract the KNR and BLZ from an existing IBAN.",
        techStack: "MIPS, Low Level Assembly Programming",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/ranjanashish298/mips"
            },
            {
                label: "",
                type: "external",
                url: " "
            }
        ],
        imageLink: "images/mips.png",
        alignLeft: false
    }
]


// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "If you're interested in discussing tech, sharing ideas for potential projects, or just looking to network within the tech community, feel free to drop me a line. I love meeting new people who are passionate about technology and innovation.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "ranjanashish298@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    contact
}