// Generate floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 60 + 20;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 20 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
  particlesContainer.appendChild(particle);
}

// Send mail function
function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const msg = document.getElementById('msg').value;
  const link = `mailto:arnkerby@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + msg)}`;
  window.location.href = link;
}

// Nav active state on click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
setTimeout(revealOnScroll, 100);

// Update nav on scroll
let lastSection = 'home';
window.addEventListener('scroll', () => {
  const sections = ['home', 'about', 'projects', 'contact'];
  let current = '';
  
  sections.forEach(section => {
    const element = document.getElementById(section);
    const rect = element.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section;
    }
  });
  
  if (current && current !== lastSection) {
    lastSection = current;
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  }
});