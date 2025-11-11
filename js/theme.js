const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;

// Function to set the theme and icon
const setTheme = (theme) => {
    body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    if (themeSwitcher) {
        themeSwitcher.textContent = theme === 'dark' ? '☀︎' : '☀︎';
    }
};

// Check for saved theme on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    setTheme(currentTheme);
} else {
    // Default to light theme if no theme is saved
    setTheme('light');
}

// Add event listener to the theme switcher button
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
        const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}