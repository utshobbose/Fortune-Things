const fortunes = [
    "A new opportunity awaits you around the corner.",
    "Your creativity will lead to unexpected success.",
    "Good fortune in travel is coming your way.",
    "Someone special will enter your life soon.",
    "Trust your instincts - they will guide you right.",
    "Financial abundance is heading your direction.",
    "A big life change will bring happiness.",
    "Your kindness will be rewarded threefold.",
    "An exciting adventure lies in your near future.",
    "Success is yours if you stay determined.",
    "Kill a Rapist, Save a Woman."
];

// Random Fortunes will be generated 
function generateRandomFortune() {
    const fortuneText = document.getElementById('fortuneText');
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}


document.addEventListener('DOMContentLoaded', () => {
    generateRandomFortune(); // Display a random fortune when the page loads
});

// Clicking each button will set these parameters which will change the color
function setGreenTheme() {
    const box = document.getElementById('fortuneBox');
    box.style.backgroundColor = '#2ecc71'; // Green
    box.style.color = '#FF0000'; // Yellow 
    box.style.borderColor = '#FF0000'; // Yellow 
    generateRandomFortune(); 
}

function setRedTheme() {
    const box = document.getElementById('fortuneBox');
    box.style.backgroundColor = '#e74c3c'; // Red 
    box.style.color = '#2c3e50'; // Black 
    box.style.borderColor = '#2c3e50'; // Black 
    generateRandomFortune();
}

function setYellowTheme() {
    const box = document.getElementById('fortuneBox');
    box.style.backgroundColor = '#f1c40f'; // Yellow 
    box.style.color = '#e74c3c'; // Red 
    box.style.borderColor = '#e74c3c'; // Red 
    generateRandomFortune(); 
}

function setBlueTheme() {
    const box = document.getElementById('fortuneBox');
    box.style.backgroundColor = '#3498db'; // Blue 
    box.style.color = '#ffffff'; // White 
    box.style.borderColor = '#ffffff'; // White 
    generateRandomFortune(); 
}