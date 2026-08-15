(() => {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const header = $("#header");
  const nav = $("#nav");
  const navToggle = $(".nav-toggle");
  const modal = $("#booking");
  const form = $("#booking-form");
  const status = $("#form-status");

  $("#year").textContent = new Date().getFullYear();

  //Header
  const syncHeader = () => header.classList.toggle("scrolled", scrollY > 18);
  syncHeader();
  addEventListener("scroll", syncHeader, { passive: true });

  //Mobile menu
  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  $$("#nav a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  // Smooth scrolling
  $$("[data-scroll]").forEach((el) => el.addEventListener("click", () => $(el.dataset.scroll)?.scrollIntoView({behavior:"smooth"})));

  // Menu filter
  $$(".filter").forEach((btn) => btn.addEventListener("click", () => {
    $$(".filter").forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    $$(".dish").forEach((dish) => dish.classList.toggle("hide", filter !== "all" && dish.dataset.category !== filter));
  }));

  // Reveal animations using IntersectionObserver, with graceful fallback.
  const reveals = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      };
    }), { threshold: .12 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("visible"));
  };

  // Modal
  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    status.textContent = "";
    setTimeout(() => $("input", modal)?.focus(), 30);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock");
  };

  $$(".js-book").forEach((btn) => btn.addEventListener("click", openModal));
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  // Client-side validation. Demo intentionally does not transmit data.
  const required = $$("[required]", form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    required.forEach((input) => {
      const ok = input.checkValidity();

      input.classList.toggle("invalid", !ok);

      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = "Please complete the required fields.";
      form.querySelector(":invalid")?.focus();
      return;
    };

    const name = String(new FormData(form).get("name") || "").trim();

    status.textContent = `Thank you${name ? `, ${name}` : ""}. Your reservation request has been received for this demo.`;

    form.reset();
  });
})();