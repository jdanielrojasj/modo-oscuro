const boton = document.querySelector(".boton-tema");

boton.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    boton.textContent = "☀️ Modo claro";
  } else {
    boton.textContent = "🌙 Modo oscuro";
  }
});
