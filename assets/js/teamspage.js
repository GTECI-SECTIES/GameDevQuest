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
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            font-size: 1.2rem;
            font-weight: 500;
            color: white;
            margin: 0;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
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

        .tooltip {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 10;
            background: #fff;
            color: #333;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            padding: 20px 30px;
            font-size: 1rem;
            width: 100%;
            margin-top: 10px;
            line-height: 1.6;
        }

        .tooltip.active {
            display: block;
        }

        .tooltip li {
            margin-bottom: 10px;
        }

        .tooltip li a {
            color: #0077cc;
            text-decoration: underline;
        }

        .parceiro-bloco {
            position: relative;
        }
        `;
        document.head.appendChild(style);

        // Agrupa <p> e <ul> como tooltip
        const container = document.querySelector(".content_container");
        if (container) {
            const items = Array.from(container.children);
            for (let i = 0; i < items.length; i++) {
                const el = items[i];
                if (el.tagName.toLowerCase() === "p" && items[i + 1]?.tagName.toLowerCase() === "ul") {
                    const ul = items[i + 1];
                    const wrapper = document.createElement("div");
                    wrapper.className = "parceiro-bloco";
                    ul.classList.add("tooltip");
                    container.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                    wrapper.appendChild(ul);
                }
            }

            // Mostra/oculta o balão (tooltip)
            container.querySelectorAll(".parceiro-bloco").forEach(bloco => {
                const p = bloco.querySelector("p");
                const ul = bloco.querySelector("ul");

                p.addEventListener("click", (e) => {
                    e.stopPropagation();

                    const isVisible = ul.classList.contains("active");

                    // Fecha todos
                    container.querySelectorAll(".tooltip").forEach(tooltip => tooltip.classList.remove("active"));

                    // Abre se não estava visível
                    if (!isVisible) {
                        ul.classList.add("active");
                    }
                });
            });

            // Clica fora fecha o balão
            document.addEventListener("click", () => {
                container.querySelectorAll(".tooltip").forEach(tooltip => tooltip.classList.remove("active"));
            });
        }
    }
});
