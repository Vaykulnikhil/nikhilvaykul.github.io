// ✅ Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navtag');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ✅ Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});

// ✅ Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navtag a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
