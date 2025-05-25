// Mostrar un mensaje de bienvenida con el logo después de 2 segundos y en un recuadro más pequeño
window.addEventListener("load", () => {
  setTimeout(() => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;

    const modal = document.createElement("div");
    modal.style.background = "#85846D";
    modal.style.borderRadius = "10px";
    modal.style.padding = "30px";
    modal.style.textAlign = "center";
    modal.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
    modal.style.maxWidth = "400px";
    modal.style.width = "80%";

    const logo = document.createElement("img");
    logo.src = "img/logo1.png";
    logo.alt = "Montaro Goods Logo";
    logo.style.width = "100px";
    logo.style.marginBottom = "20px";

    const message = document.createElement("p");
    message.textContent = "Welcome to Montaro Goods!";
    message.style.color = "#fff";
    message.style.fontSize = "18px";
    message.style.fontFamily = "Inter, sans-serif";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Enter Site";
    closeBtn.style.marginTop = "20px";
    closeBtn.style.padding = "10px 20px";
    closeBtn.style.border = "none";
    closeBtn.style.background = "#fff";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "600";

    closeBtn.addEventListener("click", () => {
      overlay.remove();
    });

    modal.appendChild(logo);
    modal.appendChild(message);
    modal.appendChild(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }, 2000); // 2 segundos de espera
});