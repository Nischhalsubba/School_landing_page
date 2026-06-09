(() => {
  const selectors = {
    menu: "#primary-menu",
    navLink: "#primary-menu a",
    navToggle: ".nav__toggle",
    form: "#admission-form",
    formNote: "#form-note",
    reveal: "[data-animate]"
  };

  const navToggle = document.querySelector(selectors.navToggle);
  const menu = document.querySelector(selectors.menu);
  const form = document.querySelector(selectors.form);
  const formNote = document.querySelector(selectors.formNote);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const closeMenu = () => {
    if (!navToggle || !menu) return;
    menu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  if (navToggle && menu) {
    navToggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(selectors.navLink).forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const parent = String(data.get("parent") || "").trim();
      const grade = String(data.get("grade") || "").trim();

      formNote.textContent = parent && grade
        ? `Thank you, ${parent}. Our Hattiban admissions team will call you about ${grade}.`
        : "Thank you. Our admissions team will call you soon.";

      form.reset();
    });
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(selectors.reveal).forEach((element) => {
    element.classList.add("will-reveal");
    observer.observe(element);
  });
})();
