// Typing effect for hero section
const text = "Sudhanshu Mishra";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing-text");
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;

// Reveal sections on scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
