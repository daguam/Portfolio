document.getElementById('en').addEventListener('click', function () {
    setLanguage('en');
});

document.getElementById('es').addEventListener('click', function () {
    setLanguage('es');
});

function setLanguage(language) {
    const translations = {
        en: {
            'about-title': 'About Me',
            'about-content': "Hello! I'm David Gutiérrez, a QA Certified Tester and Developer. I specialize in web development, automation testing, and continuous integration.",
            'cv-button': 'View My CV',
            'skills-title': 'Skills',
            'development-title': 'Development',
            'qa-title': 'QA Automation',
            'projects-title': 'Projects',
            'project1-title': 'Warrior Log',
            'project1-content': 'A self study diary to help you get your thoughts in order',
            'project1-button': 'Preview Coming Soon',
            'project2-title': 'Pobre Diablo',
            'project2-content': 'Unity 3D Bullet Hell game prototype using C# scripts.',
            'project2-button': 'Play the Game',
            'project3-title': 'WG Test Suite',
            'project3-content': "TestNG testing Suite for Warrior Log's App",
            'project3-button': 'Preview Coming Soon',
            'contact-title': 'Contact Me',
            'footerText': '&copy; 2024 David Gutiérrez. All rights reserved.'
        },
        es: {
            'about-title': 'Sobre Mí',
            'about-content': "¡Hola! Soy David Gutiérrez, un Tester y Desarrollador Certificado en QA. Me especializo en desarrollo web, pruebas de automatización e integración continua.",
            'cv-button': 'Ver Mi CV',
            'skills-title': 'Habilidades',
            'development-title': 'Desarrollo',
            'qa-title': 'Automatización de QA',
            'projects-title': 'Proyectos',
            'project1-title': 'Warrior Log',
            'project1-content': 'Un diario de autoestudio para ayudarte a organizar tus pensamientos',
            'project1-button': 'Vista Previa Pronto',
            'project2-title': 'Pobre Diablo',
            'project2-content': 'Prototipo de juego Bullet Hell en Unity 3D usando scripts en C#.',
            'project2-button': 'Jugar el Juego',
            'project3-title': 'WG Test Suite',
            'project3-content': "Suite de pruebas TestNG para la App de Warrior Log",
            'project3-button': 'Vista Previa Pronto',
            'contact-title': 'Contáctame',
            'footerText': '&copy; 2024 David Gutiérrez. Todos los derechos reservados.'
        }
    };

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerText = translations[language][key];
    });

    // Update the CV button link
    if (language === 'es') {
        document.getElementById('cvButton').setAttribute('onclick', "window.open('assets/cv_esp.pdf', '_blank')");//este
    } else {
        document.getElementById('cvButton').setAttribute('onclick', "window.open('assets/cv.pdf', '_blank')");
    }
}
