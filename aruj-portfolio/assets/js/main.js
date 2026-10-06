
const CONTACT = {
  email: "anshgamerlion@gmail.com",
  instagram: "https://instagram.com/aruj.voidwalker",
  whatsapp: "918448688820"
};

const links = {
  email: `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent("Website Project Inquiry")}`,
  instagram: CONTACT.instagram,
  whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Aruj, I'd like a website")}`
};

document.querySelectorAll("[data-contact]").forEach(a => {
  a.href = links[a.dataset.contact];

  if (a.dataset.contact === "email") {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
});

document.getElementById("y").textContent = new Date().getFullYear();

const btn = document.querySelector(".menu");
const nav = document.getElementById("links");

btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});

nav.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  }
});