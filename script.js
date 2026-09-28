const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quoteForm");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  // IMPORTANT: Replace this with Mitrayah's real WhatsApp number.
  // Format: country code + number, without +, spaces or dashes.
  const whatsappNumber = "919834119324";

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const project = document.getElementById("project").value.trim();
  const quantity = document.getElementById("quantity").value;
  const color = document.getElementById("color").value.trim() || "Not specified";

  const message =
`Hello Mitrayah! 

I would like to enquire about a 3D print.

Name: ${name}
Phone: ${phone}
Project: ${project}
Quantity: ${quantity}
Preferred color: ${color}

Please share the estimated price and details.`;

  if (whatsappNumber.includes("X")) {
    alert("Please add Mitrayah's WhatsApp number in script.js before using the enquiry form.");
    return;
  }

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
});
