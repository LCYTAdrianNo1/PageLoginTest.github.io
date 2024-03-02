document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signInBtn").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Realizamos una petición AJAX para leer el archivo de texto
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "usuarios.txt", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var lines = xhr.responseText.split('\n');
                var credentialsFound = false;
                for (var i = 0; i < lines.length; i++) {
                    var parts = lines[i].split(' ');
                    if (parts[0].trim() === username && parts[1].trim() === password) {
                        credentialsFound = true;
                        break;
                    }
                }
                if (credentialsFound) {
                    alert("Iniciando sesion porfavor espere....");
                    // Redirigir al usuario a la página de GitHub después del inicio de sesión exitoso
                    window.location.href = "https://github.com/LCYTAdrianNo1/PageLoginTest.github.io";
                } else {
                    alert("Nombre de usuario o contraseña incorrectos");
                }
            }
        };
        xhr.send();
    });
});
