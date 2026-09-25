document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

try {
  const saved = localStorage.getItem('theme');
  if (saved) applyTheme(saved);
} catch (e) {}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');
burger.addEventListener('click', () => navLinks.classList.toggle('is-open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});
