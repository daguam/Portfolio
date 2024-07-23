const translations = {
    en: {
        name: "David Gutiérrez",
        cvButton: "View My CV",
        footerText: "&copy; 2024 David Gutiérrez. All rights reserved."
    },
    es: {
        name: "David Gutiérrez",
        cvButton: "Ver Mi CV",
        footerText: "&copy; 2024 David Gutiérrez. Todos los derechos reservados."
    }
};

function switchLanguage() {
    const language = document.getElementById('languageSwitcher').value;
    document.getElementById('name').innerText = translations[language].name;
    document.getElementById('cvButton').innerText = translations[language].cvButton;
    document.getElementById('footerText').innerHTML = translations[language].footerText;
}
