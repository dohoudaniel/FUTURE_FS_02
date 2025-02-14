// signup.js

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });
    }
  
    // Password Toggle for Signup Page
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      const passwordToggle = document.querySelector('.password-toggle');
      if (passwordToggle) {
        const toggleIcon = passwordToggle.querySelector('.toggle-icon');
        passwordToggle.addEventListener('click', () => {
          const type = passwordInput.type === 'password' ? 'text' : 'password';
          passwordInput.type = type;
          toggleIcon.textContent = type === 'password' ? '👀' : '🙈';
        });
      }
    }
  
    // JavaScript Check
    if (!document.cookie.includes('js_enabled=true')) {
      document.cookie = "js_enabled=true; path=/";
      location.reload();
    }
  });
  