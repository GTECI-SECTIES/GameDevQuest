document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.toLowerCase();
    const title = document.title.toLowerCase();

    const isParceirosPage =
        path.includes("/fase") || title.includes("fase");

    if (isParceirosPage) {
        const style = document.createElement("style");
        style.textContent = `
        .content_container {
            max-width: 900px;
            margin: 0 auto;
            padding: 10px 20px;
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
            gap: 24px;
            width: 100%;
            justify-items: center;
        }

        .parceiro-bloco {
            position: relative;
            width: 100%;
            max-width: 380px;
        }

       .parceiro-bloco p {
            height: 200px; /* define um tamanho padrão fixo para o "quadro" */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12px 12px;
            background: linear-gradient(135deg, #6b46c1, #9f7aea);
            border-radius: 48px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            font-size: 1rem;
            font-weight: 600;
            color: white;
            margin: 0;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            overflow: hidden; /* evita que a imagem ultrapasse */
        }

        .parceiro-bloco p:hover {
            transform: scale(1.03);
            box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

       .parceiro-bloco p img {
            width: 250px;
            height: 100px;
            object-fit: contain;
            margin-bottom: 12px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.15);
            padding: 8px;
            box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;

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

        @media (max-width: 768px) {
        .parceiros_grid {
            grid-template-columns: 1fr;
        }

        .parceiro-bloco {
            max-width: 100%;
        }

        .parceiro-bloco p {
            height: 220px; 
            padding: 20px;
        }

        .parceiro-bloco p img {
            width: 100px;
            height: 60px;
        }
        .tooltip {
                width: 100%;
                left: 0;
            }
        }
        `;


        document.head.appendChild(style);

        const container = document.querySelector(".content_container");
        if (container) {
            const h1 = container.querySelector("h1");
            const h2 = container.querySelector("h2");

            // Garante que o subtítulo fique logo após o h1
            if (h2 && h1 && h2 !== h1.nextElementSibling) {
                container.insertBefore(h2, h1.nextSibling);
            }

            // Cria a grid e organiza os itens
            const gridWrapper = document.createElement("div");
            gridWrapper.className = "parceiros_grid";

            const children = Array.from(container.children).filter(
                el => el !== h1 && el !== h2
            );

            container.appendChild(gridWrapper);
            children.forEach(el => {
                gridWrapper.appendChild(el);
            });

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


