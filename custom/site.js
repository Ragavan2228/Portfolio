(() => {
  const EMAIL = "ragavanthabu@gmail.com";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduceMotion ? "auto" : "smooth";
  const isHome = () => location.pathname === "/" || location.pathname === "/index.html";

  document.documentElement.classList.add("rn-hide-framer-nav");

  const nav = document.createElement("header");
  nav.className = "rn-nav";
  nav.innerHTML = `
    <a class="rn-logo" href="/" aria-label="Ragavan — home">
      <svg class="rn-mark" viewBox="0 0 34 34" aria-hidden="true">
        <rect width="34" height="34" rx="10" fill="rgb(255,204,0)"/>
        <path d="M12 24V15.5C12 13.57 13.57 12 15.5 12H21" fill="none" stroke="rgb(32,32,32)" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="22" cy="22.5" r="2.1" fill="rgb(32,32,32)"/>
      </svg>
      <span class="rn-word">ragavan<span>.</span></span>
    </a>
    <nav class="rn-links" aria-label="Primary">
      <a class="rn-link rn-works" href="/#work">Works</a>
      <span class="rn-link rn-playground" aria-disabled="true">Playground <span class="rn-soon">Soon</span></span>
      <span class="rn-divider" aria-hidden="true"></span>
      <a class="rn-cta" href="mailto:${EMAIL}">Reach Me
        <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M4 10L10 4M5 4h5v5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </nav>`;

  const mount = () => document.body.appendChild(nav);
  document.body ? mount() : document.addEventListener("DOMContentLoaded", mount);

  const scrollToWork = () => {
    const work = document.getElementById("work");
    if (!work) return false;
    // scrollIntoView and native #hash jumps scroll Framer's overflow:hidden wrapper instead of the page
    for (let e = work.parentElement; e && e !== document.documentElement; e = e.parentElement) if (e.scrollTop) e.scrollTop = 0;
    scrollTo({ top: work.getBoundingClientRect().top + scrollY - 104, behavior });
    return true;
  };

  nav.querySelector(".rn-works").addEventListener("click", (e) => {
    if (isHome() && scrollToWork()) {
      e.preventDefault();
      history.replaceState(null, "", "#work");
    }
  });

  nav.querySelector(".rn-logo").addEventListener("click", (e) => {
    if (isHome()) {
      e.preventDefault();
      scrollTo({ top: 0, behavior });
      history.replaceState(null, "", "/");
    }
  });

  const onScroll = () => nav.classList.toggle("rn-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const worksLink = nav.querySelector(".rn-works");
  const io = new IntersectionObserver(
    ([entry]) => worksLink.classList.toggle("rn-active", entry.isIntersecting && isHome()),
    { rootMargin: "-45% 0px -45% 0px" }
  );
  const watchWork = () => {
    const work = document.getElementById("work");
    io.disconnect();
    worksLink.classList.remove("rn-active");
    if (work) io.observe(work);
  };

  addEventListener("load", () => {
    watchWork();
    if (isHome() && location.hash === "#work") setTimeout(scrollToWork, 400);
  });

  for (const fn of ["pushState", "replaceState"]) {
    const orig = history[fn];
    history[fn] = function (...args) {
      const r = orig.apply(this, args);
      setTimeout(watchWork, 300);
      return r;
    };
  }
  addEventListener("popstate", () => setTimeout(watchWork, 300));
})();
