document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("es").addEventListener("click", function() {
        document.documentElement.style.setProperty('--primary-color', '#99C24D');
        document.documentElement.style.setProperty('--hover-color', '#69892F');
    });

    document.getElementById("en").addEventListener("click", function() {
        document.documentElement.style.setProperty('--primary-color', '#FFA500');
        document.documentElement.style.setProperty('--hover-color', '#FF8C00');
    });
});
