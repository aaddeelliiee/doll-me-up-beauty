/*
  Doll Me Up Beauty — small enhancements only.
  The website still works if JavaScript is disabled.
*/

// Keeps the copyright year current automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Adds a subtle fade-in as sections enter the screen.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const items = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  items.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}
