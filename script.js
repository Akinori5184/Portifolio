document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano do rodapé
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Efeito leve em cards
  const cards = document.querySelectorAll(".project-card, .instagram-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Simulação de envio do formulário
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const button = contactForm.querySelector("button[type='submit']");
      const originalText = button.textContent;

      button.textContent = "Mensagem enviada!";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        contactForm.reset();
      }, 1800);
    });
  }
});
