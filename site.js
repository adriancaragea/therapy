// Header gains a stronger surface once the page scrolls.
const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal-on-scroll; if IntersectionObserver is unavailable everything simply shows.
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-visible"));
}
