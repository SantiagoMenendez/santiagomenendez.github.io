function nPresupuesto() {
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevo_presupuesto").value;
    let text = document.createTextNode("Presupuesto solicitado: " + valorIngresado);
    li.appendChild(text);

    if (valorIngresado === '') {
        alert("Ingrese su solicitud.");
    } else {
        document.getElementById("comentarios").appendChild(li);
        alert("Su solicitud fue recibida con éxito.")
    }

    document.getElementById("nuevo_presupuesto").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Eliminar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }
}