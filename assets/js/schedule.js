  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const content = item.querySelector(".accordion-content");

      if (item.classList.contains("active")) {
        // Fechar com altura animada
        content.style.maxHeight = content.scrollHeight + "px"; // define altura atual antes de colapsar
        requestAnimationFrame(() => {
          content.style.transition = "max-height 0.2s ease-out";
          content.style.maxHeight = "0px";
        });
        item.classList.remove("active");
      } else {
        // Abrir
        item.classList.add("active");
        content.style.transition = "max-height 0.4s ease-in";
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

