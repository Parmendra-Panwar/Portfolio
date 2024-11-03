
function openMail() {
  const email = 'panwparmendra7@gmail.com';
  window.location.href = `mailto:${email}`;
}

// Smooth scroll to sections
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
}

// Animate header text on load
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  header.style.transform = 'translateY(0)';
  header.style.opacity = '1';
});
