// Leer agentes desde el localStorage
document.getElementById("login-btn").addEventListener("click", () => {
    const cedula = document.getElementById("cedula").value.trim();
    const clave = document.getElementById("clave").value.trim();

    const agentes = JSON.parse(localStorage.getItem("agentes")) || [];

    // Buscar el agente en la lista
    const agente = agentes.find(a => a.cedula === cedula && a.clave === clave);

    if (agente) {
        if (agente.estado === "desactivado") {
            alert("Su usuario está desactivado.");
        } else {
            // Guardar los datos del agente autenticado en localStorage
            localStorage.setItem("agente", JSON.stringify(agente));
            alert(`¡Bienvenido, ${agente.cedula}!`);
            // Redirigir al menú principal
            window.location.href = "inicio.html";
        }
    } else {
        alert("Cédula o clave incorrecta.");
    }
});





