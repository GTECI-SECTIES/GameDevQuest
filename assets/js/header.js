
// <!--- Menu sanduiche --->


 const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    sideMenu.classList.remove('active');
  }
});


// <!--- Script Acessibilidade --->

document.addEventListener("DOMContentLoaded", () => {
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");
    const resetFontButton = document.getElementById("reset-font");

    // Defina o tamanho padrão da fonte
    let fontSize = 100; // Representa 100% do tamanho padrão

    // Função para ajustar o tamanho da fonte
    function adjustFontSize(newSize) {
        document.documentElement.style.fontSize = `${newSize}%`;
    }

    // Aumentar o tamanho da fonte
    increaseFontButton.addEventListener("click", () => {
        if (fontSize < 150) { // Limite máximo de 150%
            fontSize += 10;
            adjustFontSize(fontSize);
        }
    });

    // Diminuir o tamanho da fonte
    decreaseFontButton.addEventListener("click", () => {
        if (fontSize > 70) { // Limite mínimo de 70%
            fontSize -= 10;
            adjustFontSize(fontSize);
        }
    });

    // Redefinir o tamanho da fonte
    resetFontButton.addEventListener("click", () => {
        fontSize = 100; // Redefine para 100%
        adjustFontSize(fontSize);
    });
});


