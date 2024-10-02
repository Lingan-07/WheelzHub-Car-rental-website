'use strict';

/**
 * Navbar Toggle
 */

const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');

const toggleNav = () => {
  navToggleBtn.classList.toggle('active');
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
};

navToggleBtn.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);

navbarLinks.forEach(link => {
  link.addEventListener('click', toggleNav);
});

/**
 * Header Active on Scroll
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  header.classList.toggle('active', window.scrollY >= 10);
});