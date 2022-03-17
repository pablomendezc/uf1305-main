<script>
        // Definir variables
        var n = 0;

        // Funcion para leer numeros Reales
        function leerNumero() {
            num = parseInt(
                prompt("Porfi, escribe un número")
            );
            return num;
        }

        function mostrarResultados( nf ) {
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial( nf );
        }

        
        function mostrarFactorial( nf ) {
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial( nf );
        }

        function factorial( nf ) {
            var factorial = 1;
            for ( i=1; i <= nf; i++ ) {
                factorial = factorial * i;
            }

            return factorial;
        }

    </script>