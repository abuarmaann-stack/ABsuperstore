// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Close menu on nav click (mobile)
nav?.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  nav.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
});

// Tabs
const tabs = Array.from(document.querySelectorAll(".tab"));
const panes = Array.from(document.querySelectorAll(".pane"));

tabs.forEach((t) => {
  t.addEventListener("click", () => {
    const id = t.getAttribute("data-tab");
    tabs.forEach(x => x.classList.remove("is-active"));
    panes.forEach(p => p.classList.remove("is-active"));

    t.classList.add("is-active");
    document.getElementById(id)?.classList.add("is-active");
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Contact form -> WhatsApp
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const name = (fd.get("name") || "").toString().trim();
  const phone = (fd.get("phone") || "").toString().trim();
  const message = (fd.get("message") || "").toString().trim();

  const text =
    السلام علیکم، میں البرھان سپر سٹور کے لیے انکوائری کرنا چاہتا ہوں۔\n\n +
    نام: ${name}\n +
    فون: ${phone}\n +
    پیغام: ${message};

  const url = https://wa.me/96892101933?text=${encodeURIComponent(text)};
  window.open(url, "_blank", "noopener");
  form.reset();
});