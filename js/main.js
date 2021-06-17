const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("menuactivo");
});

const grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove("activo"));
      evento.target.classList.add("activo");

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === "all"
        ? grid.filter("[data-categoria]")
        : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });
});
