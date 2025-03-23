// Rolagem suave para os links de navegação
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }

  // Verificar se há mensagem de formulário
  const urlParams = new URLSearchParams(window.location.search);
  const mensagem = urlParams.get("mensagem");

  if (mensagem === "enviado") {
    exibirMensagem(
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      "sucesso"
    );
  } else if (mensagem === "erro") {
    exibirMensagem(
      "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.",
      "erro"
    );
  }

  // Animação para elementos quando entram na viewport
  const elementos = document.querySelectorAll(
    ".beneficio-item, .especialidade-item, .depoimento-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animado");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elementos.forEach((elemento) => {
    observer.observe(elemento);
  });
});

// Função para exibir mensagens de feedback
function exibirMensagem(texto, tipo) {
  const mensagem = document.createElement("div");
  mensagem.className = `mensagem ${tipo}`;
  mensagem.textContent = texto;

  document.body.appendChild(mensagem);

  setTimeout(() => {
    mensagem.classList.add("visivel");
  }, 100);

  setTimeout(() => {
    mensagem.classList.remove("visivel");
    setTimeout(() => {
      mensagem.remove();
    }, 500);
  }, 5000);
}
