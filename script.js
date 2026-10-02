const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===============================
// FECHAR MENU AO CLICAR
// ===============================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ===============================
// FORMULÁRIO → WHATSAPP
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // ===============================
    // WHATSAPP DA MAJU DESPACHANTE
    // ===============================

    const whatsappNumber = "5541996429159";

    const text = `
Olá, MAJU Despachante!

Gostaria de solicitar atendimento.

Nome: ${name}

WhatsApp:
${phone}

Serviço:
${service}

Mensagem:
${message}
`;

    // Cria o link do WhatsApp com a mensagem preenchida
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappURL, "_blank");
});