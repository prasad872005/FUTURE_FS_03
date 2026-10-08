const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.textContent = "☰";
  });
});

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".menu-item");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");
    const category = filter.dataset.category;

    items.forEach(item => {
      const show = category === "all" || item.dataset.category === category;
      item.style.display = show ? "flex" : "none";
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
