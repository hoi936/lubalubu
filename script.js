// script.js
document.addEventListener("DOMContentLoaded", () => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    
    // Load saved data
    days.forEach(day => {
        const savedData = localStorage.getItem(day);
        if (savedData) {
            document.querySelector(`#${day} textarea`).value = savedData;
        }
    });

    // Save data on input
    document.querySelectorAll("textarea").forEach((textarea, index) => {
        textarea.addEventListener("input", () => {
            localStorage.setItem(days[index], textarea.value);
        });
    });
});
