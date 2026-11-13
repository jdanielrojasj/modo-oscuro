const boton = document.querySelector(".boton-tema");

function actualizarBoton() {
  if (document.body.classList.contains("oscuro")) {
    boton.textContent = "☀️ Modo claro";
  } else {
    boton.textContent = "🌙 Modo oscuro";
  }
}

if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("oscuro");
}
actualizarBoton();

boton.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }

  actualizarBoton();
});
