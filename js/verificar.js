 // Verificar si el usuario está desactivado
 const agentes = JSON.parse(localStorage.getItem("agentes")) || [];
 const cedula = "12345"; // Obtener la cédula del usuario actual (esto se puede hacer con una sesión o algo similar)
 const agente = agentes.find(agente => agente.cedula === cedula);

 if (agente && agente.estado === "desactivado") {
     alert("Su usuario está desactivado.");
     window.location.href = "index.html"; // Redirigir al login
 }