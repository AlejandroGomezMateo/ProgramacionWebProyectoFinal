document.addEventListener("DOMContentLoaded", function() {
    // Obtener datos del agente y las multas desde localStorage
    const agente = JSON.parse(localStorage.getItem("agente"));
    const multas = JSON.parse(localStorage.getItem("multas")) || []; // Si no hay multas, inicializa como array vacío

    // Mostrar cédula del agente
    document.getElementById("cedulaAgente").innerText = agente.cedula;

    // Calcular comisión y total de ingresos
    const comisionPorcentaje = 0.10; // 10% de cada multa
    let comisionTotal = 0;
    let totalIngresos = 0;

    // Limitar a las últimas 5 multas
    const ultimasMultas = multas.slice(-5); // Las últimas 5 multas

    // Recorrer las últimas 5 multas
    ultimasMultas.forEach((multa) => {
        const costo = parseFloat(multa.costo) || 0; // Asegurarse de que el costo sea un número
        const comision = costo * comisionPorcentaje;
        comisionTotal += comision;
        totalIngresos += costo;

        // Crear un div para cada multa
        const multaDiv = document.createElement("div");
        multaDiv.classList.add("multa");

        // Agregar la información de la multa en el HTML
        multaDiv.innerHTML = `
            <p class="titulo">Cédula:</p>
            <p>${multa.cedula}</p>
            <p class="titulo">Nombre:</p>
            <p>${multa.nombre}</p>
            <p class="titulo">Costo:</p>
            <p>${multa.costo} USD</p>
        `;

        // Agregar el div de la multa al contenedor de últimas multas
        document.getElementById("ultimasMultas").appendChild(multaDiv);
    });

    // Mostrar la comisión total y los ingresos totales
    document.getElementById("comisionMes").innerText = comisionTotal.toFixed(2); // 10% de cada multa
    document.getElementById("totalIngresos").innerText = totalIngresos.toFixed(2); // Total de las multas
});

