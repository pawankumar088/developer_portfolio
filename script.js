// Nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		const isOpen = navMenu.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

// Theme toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const readStoredTheme = () => localStorage.getItem('theme') || 'light';
const applyTheme = (theme) => {
	if (theme === 'light') {
		document.documentElement.classList.add('light');
		if (themeToggle) themeToggle.textContent = '🌙';
	} else {
		document.documentElement.classList.remove('light');
		if (themeToggle) themeToggle.textContent = '🌞';
	}
};

applyTheme(readStoredTheme());
if (themeToggle) {
	themeToggle.addEventListener('click', () => {
		const current = readStoredTheme();
		const next = current === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', next);
		applyTheme(next);
	});
}

// Current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


