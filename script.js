(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (!toggle || !nav) return;

  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    const label = toggle.querySelector(".menu-label");
    if (label) label.textContent = open ? "Close" : "Menu";
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 681px)").matches) setMenu(false);
  });
})();