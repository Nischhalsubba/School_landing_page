(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const form = document.querySelector("#admission-form");
  const formNote = document.querySelector("#form-note");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName !== "A") {
        return;
      }

      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  if (form && formNote) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const parent = data.get("parent");
      const grade = data.get("grade");
      formNote.textContent = "Thank you, " + parent + ". Our Hattiban admissions team will call you about " + grade + ".";
      form.reset();
    });
  }

  if (!window.gsap || reduceMotion) {
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.set("[data-animate='hero'] > *", { autoAlpha: 0, y: 24 });
  gsap.set(".hero [data-animate='image']", { autoAlpha: 0, y: 28, scale: 0.98 });

  gsap.timeline({ defaults: { ease: "power3.out" } })
    .to("[data-animate='hero'] > *", {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08
    })
    .to(".hero [data-animate='image']", {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.9
    }, "-=0.5");

  if (!ScrollTrigger) {
    return;
  }

  gsap.utils.toArray("[data-animate='section']").forEach(function (section) {
    gsap.from(section.children, {
      autoAlpha: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%"
      }
    });
  });

  gsap.utils.toArray("[data-animate='image']").filter(function (imageBlock) {
    return !imageBlock.closest(".hero");
  }).forEach(function (imageBlock) {
    gsap.from(imageBlock, {
      autoAlpha: 0,
      y: 28,
      scale: 0.98,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageBlock,
        start: "top 84%"
      }
    });
  });

  gsap.utils.toArray("[data-animate='cards']").forEach(function (group) {
    gsap.from(group.children, {
      autoAlpha: 0,
      y: 34,
      duration: 0.75,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 84%"
      }
    });
  });

  gsap.utils.toArray("[data-animate='stagger']").forEach(function (group) {
    gsap.from(group.children, {
      autoAlpha: 0,
      x: 24,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 84%"
      }
    });
  });
})();
