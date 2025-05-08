document.addEventListener("DOMContentLoaded", function () {
    const images = [...document.querySelectorAll('.kg-image-card img, .kg-gallery-image img')];
    let currentIndex = 0;

    // Criação do HTML do lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <span class="lb-close">&times;</span>
        <img class="lb-img" />
        <a class="lb-prev">&#10094;</a>
        <a class="lb-next">&#10095;</a>
    `;
    document.body.appendChild(lightbox);

    // Estilo do lightbox
    const style = document.createElement('style');
    style.textContent = `
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

