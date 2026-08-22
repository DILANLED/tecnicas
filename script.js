const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const USER_VALIDO = "estudiante";
        const PASS_VALIDA = "1234";

        const userIngresado = document.getElementById('usuario').value;
        const passIngresada = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');
        const loaderOverlay = document.getElementById('loader-overlay');

        if (userIngresado === USER_VALIDO && passIngresada === PASS_VALIDA) {
            errorMsg.classList.add('d-none');
            
            // Registrar inicio de sesión
            localStorage.setItem('autenticado', 'true');

            // ⚛️ Activa la pantalla de carga del Átomo de Neón
            if (loaderOverlay) {
                loaderOverlay.classList.add('active');
            }

            // 2.5 segundos de animación
            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 2500);

        } else {
            errorMsg.classList.remove('d-none');
        }
    });
}

function cerrarSesion() {
    localStorage.removeItem('autenticado');
    window.location.href = "index.html";
}