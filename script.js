// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Typing effect
const roles = ["Business Analyst", "ERP Developer", "Project Manager", "Data Enthusiast"];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedText = document.getElementById('typedText');

function typeLoop() {
  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 60 : 100);
}
typeLoop();

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
});

// Contact form (demo - connect to Cloudflare Worker/Formspree for real submission)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'ขอบคุณสำหรับข้อความครับ! ผมจะติดต่อกลับโดยเร็วที่สุด 🙏';
  form.reset();
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
