const translations = {
    en: {
        name: "David Gutiérrez",
        cvButton: "View My CV",
        footerText: "&copy; 2024 David Gutiérrez. All rights reserved.",
        comingSoon: "Coming Soon"
    },
    es: {
        name: "David Gutiérrez",
        cvButton: "Ver Mi CV",
        footerText: "&copy; 2024 David Gutiérrez. Todos los derechos reservados.",
        comingSoon: "Próximamente"
    }
};

function switchLanguage() {
    const language = document.getElementById('languageSwitcher').value;
    document.getElementById('name').innerText = translations[language].name;
    document.getElementById('cvButton').innerText = translations[language].cvButton;
    document.getElementById('footerText').innerHTML = translations[language].footerText;
    document.querySelector('.coming-soon-badge').innerText = translations[language].comingSoon;
}
