document.addEventListener("DOMContentLoaded", function () {
    const postTitle = document.querySelector("h1, .post-title");
    if (postTitle && postTitle.textContent.toLowerCase().includes("fase")) {
        // Se o título contém "fase", não executa o restante
        return;
    }

    const images = [...document.querySelectorAll('.kg-image-card img, .kg-gallery-image img')];
    let currentIndex = 0;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <span class="lb-close">&times;</span>
        <img class="lb-img" />
        <a class="lb-prev">&#10094;</a>
        <a class="lb-next">&#10095;</a>
    `;
    document.body.appendChild(lightbox);

    const style = document.createElement('style');
    style.textContent = `

        .content_container {
        max-width: 800px;
        margin: 2rem auto;
        color: #222;
        line-height: 1.6;
        }

        .cardholders-section h1 {
        text-align: center;
        font-size: xx-large;
        padding: 10px;
        }

        .titulo-evento {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: center;
        color: #111;
        letter-spacing: 0.03em;
        }

        .texto-evento p {
        font-size: 1rem;
        color: #444;
        margin-bottom: 2rem;
        text-align: justify;
        }
        #lightbox {
            display: none;
            position: fixed;
            z-index: 9999;
            padding-top: 60px;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            text-align: center;
        }
        #lightbox .lb-img {
            max-width: 90%;
            max-height: 80vh;
        }
        .lb-close {
            position: absolute;
            top: 20px; right: 30px;
            font-size: 40px;
            color: white;
            cursor: pointer;
        }
        .lb-prev, .lb-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 40px;
            color: white;
            cursor: pointer;
            padding: 16px;
        }
        .lb-prev { left: 10px; }
        .lb-next { right: 10px; }

        /* Responsividade */
        @media screen and (max-width: 600px) {

        .cardholders-section h1 {
            text-align: center;
            font-size: larger;
        }
        .titulo-evento {
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
        }

        .texto-evento p {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
        }

        .lb-prev,
        .lb-next {
            font-size: 30px;
            padding: 12px;
            top: 30%;
        }

        #lightbox .lb-img {
            max-width: 95%;
            max-height: 70vh;
        }
    `;
    document.head.appendChild(style);

    const lbImg = lightbox.querySelector('.lb-img');
    const closeBtn = lightbox.querySelector('.lb-close');
    const nextBtn = lightbox.querySelector('.lb-next');
    const prevBtn = lightbox.querySelector('.lb-prev');

    images.forEach((img, i) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            currentIndex = i;
            showImage();
        });
    });

    function showImage() {
        lightbox.style.display = 'block';
        lbImg.src = images[currentIndex].src;
    }

    closeBtn.onclick = () => lightbox.style.display = 'none';
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    };
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    };

    window.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'Escape') closeBtn.click();
        }
    });
});
