document.addEventListener("DOMContentLoaded", function () {
    const postTitle = document.querySelector("h1, .post-title");
    if (!postTitle || !postTitle.textContent.toLowerCase().includes("fase")) return;

    const style = document.createElement("style");
    style.textContent = `
        /* Aplica apenas dentro do post com o layout de imagem + caption */
        .kg-card.kg-image-card.kg-card-hascaption {
            display: flex;
            align-items: center;
            gap: 12px;
            max-width: fit-content;
            margin: 1em 0;
            flex-wrap: nowrap;
        }

        /* Redimensiona e estiliza a logo */
        .kg-card.kg-image-card.kg-card-hascaption img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        /* Estiliza o nome da equipe */
        .kg-card.kg-image-card.kg-card-hascaption figcaption {
            font-size: 1rem;
            font-weight: 600;
            margin: 0;
            padding: 0;
            cursor: pointer;
        }

        /* Estilo para o quadro de informações */
        .info-quadro {
            display: none;
            position: absolute;
            background: #333;
            color: #fff;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.9rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            max-width: 250px;
            z-index: 999;
            white-space: pre-line;
        }

        /* Exibe o quadro quando a legenda é clicada */
        .kg-card.kg-image-card.kg-card-hascaption:hover .info-quadro {
            display: block;
        }
    `;
    document.head.appendChild(style);

    // Dados das equipes
    const equipesInfo = {
        "Jampa Buggys": `Equipe Jampa Buggys\nGênero: Corrida\nPlataforma: PC\nPúblico-alvo: Crianças, adolescentes e jogadores casuais.`,
        "Outros Exemplo": `Equipe Exemplo\nGênero: Aventura\nPlataforma: Mobile\nPúblico-alvo: Jovens adultos.`
    };

    // Aplica as informações nos quadrados de imagem e legenda
    document.querySelectorAll(".kg-image-card.kg-card-hascaption").forEach(card => {
        const nomeEquipe = card.querySelector("figcaption")?.textContent.trim();
        const info = equipesInfo[nomeEquipe];

        if (info) {
            // Cria o balão de informações
            const infoQuadro = document.createElement("div");
            infoQuadro.classList.add("info-quadro");
            infoQuadro.textContent = info;
            card.appendChild(infoQuadro);
        }
    });
});
