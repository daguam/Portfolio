const translations = {
    en: {
        name: "David Gutiérrez",
        cvButton: "View My CV",
        footerText: "&copy; 2024 David Gutiérrez. All rights reserved.",
        comingSoon: "Coming Soon",
        colors: {
            primaryColor: "#007BFF",
            hoverColor: "#0056b3",
            backgroundColor: "#001f3f",
            footerColor: "#AAAAAA"
        }
    },
    es: {
        name: "David Gutiérrez",
        cvButton: "Ver Mi CV",
        footerText: "&copy; 2024 David Gutiérrez. Todos los derechos reservados.",
        comingSoon: "Próximamente",
        colors: {
            primaryColor: "#FFA500",  // Orange
            hoverColor: "#FF8C00",    // Darker Orange
            backgroundColor: "#333333", // Dark Gray for better contrast
            footerColor: "#FFD700"    // Gold
        }
    }
};

function switchLanguage() {
    const language = document.getElementById('languageSwitcher').value;
    const translation = translations[language];
    
    document.getElementById('name').innerText = translation.name;
    document.getElementById('cvButton').innerText = translation.cvButton;
    document.getElementById('footerText').innerHTML = translation.footerText;
    document.querySelector('.coming-soon-badge').innerText = translation.comingSoon;
    
    document.documentElement.style.setProperty('--primary-color', translation.colors.primaryColor);
    document.documentElement.style.setProperty('--hover-color', translation.colors.hoverColor);
    document.documentElement.style.setProperty('--background-color', translation.colors.backgroundColor);
    document.documentElement.style.setProperty('--footer-color', translation.colors.footerColor);
}
