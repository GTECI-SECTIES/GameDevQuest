document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.toLowerCase();
    const title = document.title.toLowerCase();

    const isParceirosPage =
        path.includes("/fase") || title.includes("fase");

    if (isParceirosPage) {
        const style = document.createElement("style");
        style.textContent = `
        .content_container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .content_container h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: bold;
            color: #222;
        }

        .content_container h2 {
            text-align: center;
            font-size: 1.4rem;
            font-weight: normal;
            color: #555;
            margin-top: 0;
            margin-bottom: 40px;
        }

        .parceiros_grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            width: 100%;
        }

        .parceiros_grid p {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            background: #7c3aed;
            padding: 18px 26px;
            border-radius: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            font-size: 1.2rem;
            font-weight: 500;
            color: white;
            margin: 0;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            white-space: nowrap;
            text-align: center;
        }

        .parceiros_grid p span {
            display: inline-block;
            line-height: 1;
        }

        .parceiros_grid p img {
            width: 200px;
            height: 70px;
            object-fit: contain;
            border-radius: 100px;
            display: block;
            margin: 0 auto;
        }

        .parceiros_grid p:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 16px rgba(0,0,0,0.1);
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

        @media (max-width: 768px) {
           .parceiros_grid {
        grid-template-columns: 1fr;
    }

    .parceiros_grid p {
        flex-direction: column;
        text-align: center;
        white-space: normal;
    }

    .parceiros_grid p img {
        width: 100%;
        height: auto;
        max-width: 250px;
    }

    .tooltip {
        position: absolute;
        width: calc(100% - 40px);
        left: 20px;
        top: 100%;
        margin-top: 10px;
        z-index: 10;
    }

    .parceiro-bloco {
        position: relative;
    }
        }
        `;
        document.head.appendChild(style);

        const container = document.querySelector(".content_container");
        if (container) {
            // Criar a estrutura h1, h2 e grid
            const h1 = container.querySelector("h1");
            const subtitulo = document.createElement("h2");
            subtitulo.textContent = "Conheça nossos parceiros por etapa do projeto";

            const gridWrapper = document.createElement("div");
            gridWrapper.className = "parceiros_grid";

            // Mover todos os elementos que não são h1/h2 para a grid
            const children = Array.from(container.children).filter(
                el => el !== h1
            );

            container.insertBefore(subtitulo, h1.nextSibling);
            container.appendChild(gridWrapper);

            children.forEach(el => {
                if (el !== subtitulo) gridWrapper.appendChild(el);
            });

            // Agrupa <p> e <ul> como tooltip
            const items = Array.from(gridWrapper.children);
            for (let i = 0; i < items.length; i++) {
                const el = items[i];
                if (el.tagName.toLowerCase() === "p" && items[i + 1]?.tagName.toLowerCase() === "ul") {
                    const ul = items[i + 1];
                    const wrapper = document.createElement("div");
                    wrapper.className = "parceiro-bloco";
                    ul.classList.add("tooltip");
                    gridWrapper.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                    wrapper.appendChild(ul);
                }
            }

            // Mostra/oculta o balão (tooltip)
            gridWrapper.querySelectorAll(".parceiro-bloco").forEach(bloco => {
                const p = bloco.querySelector("p");
                const ul = bloco.querySelector("ul");

                p.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const isVisible = ul.classList.contains("active");
                    gridWrapper.querySelectorAll(".tooltip").forEach(tooltip => tooltip.classList.remove("active"));
                    if (!isVisible) {
                        ul.classList.add("active");
                    }
                });
            });

            document.addEventListener("click", () => {
                gridWrapper.querySelectorAll(".tooltip").forEach(tooltip => tooltip.classList.remove("active"));
            });
        }
    }
});
