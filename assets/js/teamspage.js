document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.toLowerCase();
  const title = document.title.toLowerCase();

  const isParceirosPage =
    path.includes("/parceiros") || title.includes("parceiros");

  if (isParceirosPage) {
    const style = document.createElement("style");
    style.textContent = `
.content_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: start; /* ← ESSENCIAL: impede que uma coluna afete a outra */
  overflow: hidden;   /* ← Impede que o crescimento vaze */
}


.content_container h1 {
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  font-weight: bold;
  color: #222;
}

.content_container p {
  display: flex;
  align-items: center;
  gap: 30px;
  background: #7c3aed;
  padding: 20px 30px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  margin: 0;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content_container p:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.content_container p img {
  max-width: 140px;
  max-height: 90px;
  object-fit: contain;
  flex-shrink: 0;
  display: block;
}

/* Lista de detalhes (sanfoninha), agora no mesmo bloco */
.content_container ul {
  display: none;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  list-style: none;
  padding: 20px 30px;
  margin: 0;
}

.content_container ul li {
  margin-bottom: 10px;
}

.content_container ul li a {
  color: #0077cc;
  text-decoration: underline;
}

/* Wrapper do bloco p + ul juntos */
.parceiro-bloco {
  display: flex;
  flex-direction: column;
  break-inside: avoid; /* ← Ajuda a manter a integridade visual */
}
    `;
    document.head.appendChild(style);

    // Agrupa cada <p> e <ul> em um bloco <div class="parceiro-bloco">
    const container = document.querySelector(".content_container");
    if (container) {
      const items = Array.from(container.children);
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (el.tagName.toLowerCase() === "p" && items[i + 1]?.tagName.toLowerCase() === "ul") {
          const ul = items[i + 1];
          const wrapper = document.createElement("div");
          wrapper.className = "parceiro-bloco";
          container.replaceChild(wrapper, el);
          wrapper.appendChild(el);
          wrapper.appendChild(ul);
        }
      }

      // Sanfona: abrir/fechar ul ao clicar no p
      container.querySelectorAll(".parceiro-bloco").forEach(bloco => {
        const p = bloco.querySelector("p");
        const ul = bloco.querySelector("ul");

        p.addEventListener("click", () => {
          const isVisible = ul.style.display === "block";

          // Fecha todos
          container.querySelectorAll("ul").forEach(ul => ul.style.display = "none");

          // Abre apenas este, se não estava visível
          if (!isVisible) {
            ul.style.display = "block";
          }
        });
      });
    }
  }
});
