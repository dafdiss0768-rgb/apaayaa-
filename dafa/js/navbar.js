const navbar = document.querySelector(".navbar");
const section2 = document.querySelector(".section2");

window.addEventListener("scroll", () => {
  const rect = section2.getBoundingClientRect();

  // kalau section2 sudah mulai masuk viewport
  if (rect.top <= 80 && rect.bottom >= 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});