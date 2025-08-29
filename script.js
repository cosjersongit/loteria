// Datos de las cartas
    // Datos de las cartas
const cartas = [
    {numero: 1, nombre: "el gallo", archivo: "1 el gallo-min.jpg", descripcion: "Quiquiriquí, despierta ya."},
    {numero: 2, nombre: "el diablito", archivo: "2 el diablito-min.jpg", descripcion: "Con cuernos viene a molestar."},
    {numero: 3, nombre: "la dama", archivo: "3 la dama-min.jpg", descripcion: "Tan elegante al caminar."},
    {numero: 4, nombre: "el catrín", archivo: "4 el catrin-min.jpg", descripcion: "Con sombrero presume más."},
    {numero: 5, nombre: "el paraguas", archivo: "5 el paraguas-min.jpg", descripcion: "Si sopla el viento, se va volar."},
    {numero: 6, nombre: "la sirena", archivo: "6-la-sirena-min.jpg", descripcion: "En el mar sabe encantar."},
    {numero: 7, nombre: "la escalera", archivo: "7 la escalera-min.jpg", descripcion: "Sube y baja sin parar."},
    {numero: 8, nombre: "la botella", archivo: "8 la botella-min.jpg", descripcion: "Llena de vino, lista pa’ brindar."},
    {numero: 9, nombre: "el barril", archivo: "9 barril-min.jpg", descripcion: "Pesado y redondo, guardián del ron."},
    {numero: 10, nombre: "el árbol", archivo: "10 arbol-min.jpg", descripcion: "Sombrilla fresca, bajo el solón."},
    {numero: 11, nombre: "el melón", archivo: "11 melon-min.jpg", descripcion: "Verde por fuera, rojo por dentro."},
    {numero: 12, nombre: "el valiente", archivo: "12 el valiente-min.jpg", descripcion: "Muy bravucón, pero se asusta."},
    {numero: 13, nombre: "el gorrito", archivo: "13 el gorrito-min.jpg", descripcion: "Chiquitito se voló."},
    {numero: 14, nombre: "la muerte", archivo: "14 la muerte-min.jpg", descripcion: "Con la guadaña ya llegó."},
    {numero: 15, nombre: "la pera", archivo: "15 la pera-min.jpg", descripcion: "Dulce y jugosa, no la dejes caer."},
    {numero: 16, nombre: "la bandera", archivo: "16 la bandera-min.jpg", descripcion: "Rojo, blanco y verde ondea."},
    {numero: 17, nombre: "el bandolón", archivo: "17 el bandolon-min.jpg", descripcion: "Con cuerdas gordas suena mejor."},
    {numero: 18, nombre: "el violoncello", archivo: "18 el violoncello-min.jpg", descripcion: "Profundo canto de emoción."},
    {numero: 19, nombre: "la garza", archivo: "19 la garza-min.jpg", descripcion: "Con cuello largo va a pasar."},
    {numero: 20, nombre: "el pájaro", archivo: "20 el pajaro-min.jpg", descripcion: "Pío, pío quiere volar."},
    {numero: 21, nombre: "la mano", archivo: "21 la mano-min.jpg", descripcion: "Cinco deditos para contar."},
    {numero: 22, nombre: "la bota", archivo: "22 la bota-min.jpg", descripcion: "Fuerte y dura pa’ caminar."},
    {numero: 23, nombre: "la luna", archivo: "23 la luna-min.jpg", descripcion: "Redonda y bella de noche está."},
    {numero: 24, nombre: "el cotorro", archivo: "24 el cotorro-min.jpg", descripcion: "Habla y repite sin pensar."},
    {numero: 25, nombre: "el borracho", archivo: "25 el borracho-min.jpg", descripcion: "Con paso chueco va a tambalear."},
    {numero: 26, nombre: "el negrito", archivo: "26 el negrito-min.jpg", descripcion: "Con su tambor pone a bailar."},
    {numero: 27, nombre: "el corazón", archivo: "27 el corazon-min.jpg", descripcion: "Late que late sin descansar."},
    {numero: 28, nombre: "la sandía", archivo: "28 la sandia-min.jpg", descripcion: "Rayada fuera, dulce por dentro."},
    {numero: 29, nombre: "el tambor", archivo: "29 el tambor-min.jpg", descripcion: "Redoble alegre pa’ marchar."},
    {numero: 30, nombre: "el camarón", archivo: "30 el camaron-min.jpg", descripcion: "De ladito camina siempre."},
    {numero: 31, nombre: "las jaras", archivo: "31 las jaras-min.jpg", descripcion: "Con arco y flecha al blanco van."},
    {numero: 32, nombre: "el músico", archivo: "32 el musico-min.jpg", descripcion: "Con su canción alegra más."},
    {numero: 33, nombre: "la araña", archivo: "33 la arana-min.jpg", descripcion: "Teje que teje sin descansar."},
    {numero: 34, nombre: "el soldado", archivo: "34 el soldado-min.jpg", descripcion: "Con casco firme, siempre de pie."},
    {numero: 35, nombre: "la estrella", archivo: "35 la estrella-min.jpg", descripcion: "Brilla y brilla en la oscuridad."},
    {numero: 36, nombre: "el cazo", archivo: "36 el cazo-min.jpg", descripcion: "De cobre rojo pa’ cocinar."},
    {numero: 37, nombre: "el mundo", archivo: "37 el mundo-min.jpg", descripcion: "Redondo gira sin parar."},
    {numero: 38, nombre: "el apache", archivo: "38 el apache-min.jpg", descripcion: "Con grito fuerte va a cazar."},
    {numero: 39, nombre: "el nopal", archivo: "39 el nopal-min.jpg", descripcion: "Con muchas tunas y espinas mil."},
    {numero: 40, nombre: "el alacrán", archivo: "40 el alacran-min.jpg", descripcion: "Con cola lista pa’ picar."},
    {numero: 41, nombre: "la rosa", archivo: "41 la rosa-min.jpg", descripcion: "Linda y fragante con espinas."},
    {numero: 42, nombre: "la calavera", archivo: "42 la calavera-min.jpg", descripcion: "Con risa hueca te va a mirar."},
    {numero: 43, nombre: "la campana", archivo: "43 la campana-min.jpg", descripcion: "Tilín, tilán, suena sin parar."},
    {numero: 44, nombre: "el cantarito", archivo: "44 el cantarito-min.jpg", descripcion: "De barro humilde pa’ guardar."},
    {numero: 45, nombre: "el venado", archivo: "45 el venado-min.jpg", descripcion: "Con cuernos grandes corre veloz."},
    {numero: 46, nombre: "el sol", archivo: "46 el sol-min.jpg", descripcion: "Brilla y calienta con gran poder."},
    {numero: 47, nombre: "la corona", archivo: "47 la corona-min.jpg", descripcion: "De oro fino pa’ reinar."},
    {numero: 48, nombre: "la chalupa", archivo: "48 la chalupa-min.jpg", descripcion: "Con flores lindas va a flotar."},
    {numero: 49, nombre: "el pino", archivo: "49 el pino-min.jpg", descripcion: "Verde y frondoso en Navidad."},
    {numero: 50, nombre: "el pescado", archivo: "50 el pescado-min.jpg", descripcion: "En el río nada y salta."},
    {numero: 51, nombre: "la palma", archivo: "51 la palma-min.jpg", descripcion: "Alta y delgada frente al mar."},
    {numero: 52, nombre: "la maceta", archivo: "52 la maceta-min.jpg", descripcion: "Con flores bellas siempre está."},
    {numero: 53, nombre: "el arpa", archivo: "53 el arpa-min.jpg", descripcion: "Con dulces cuerdas va a sonar."},
    {numero: 54, nombre: "la rana", archivo: "54 la rana-min.jpg", descripcion: "Croa que croa junto al río."}
];


    // Variables del juego
    let cartasDisponibles = [];
    let cartasMostradas = [];
    let juegoIniciado = false;
    let cartaActual = null;

    // Elementos del DOM
    const iniciarBtn = document.getElementById('iniciarBtn');
    const siguienteBtn = document.getElementById('siguienteBtn');
    const reiniciarBtn = document.getElementById('reiniciarBtn');
    const cardDisplay = document.getElementById('cardDisplay');
    const cardsList = document.getElementById('cardsList');
    const gameInfo = document.getElementById('gameInfo');
    const cartaActualSpan = document.getElementById('cartaActual');
    const cartasRestantesSpan = document.getElementById('cartasRestantes');

    // Event listeners
    iniciarBtn.addEventListener('click', iniciarJuego);
    siguienteBtn.addEventListener('click', siguienteCarta);
    reiniciarBtn.addEventListener('click', reiniciarJuego);

    function iniciarJuego() {
        cartasDisponibles = [...cartas];
        cartasMostradas = [];
        juegoIniciado = true;
        
        iniciarBtn.disabled = true;
        siguienteBtn.disabled = false;
        gameInfo.style.display = 'block';
        
        siguienteCarta();
    }

    function siguienteCarta() {
        if (cartasDisponibles.length === 0) {
            mostrarFinJuego();
            return;
        }

        // Seleccionar carta aleatoria
        const indiceAleatorio = Math.floor(Math.random() * cartasDisponibles.length);
        cartaActual = cartasDisponibles[indiceAleatorio];
        
        // Remover carta de disponibles y agregar a mostradas
        cartasDisponibles.splice(indiceAleatorio, 1);
        cartasMostradas.push(cartaActual);
        
        mostrarCarta(cartaActual);
        actualizarListaCartas();
        actualizarEstadisticas();
    }

    function mostrarCarta(carta) {
        cardDisplay.innerHTML = `
            <p class="card-description">${carta.descripcion}</p>
            <img src="imagenes/${carta.archivo}" alt="${carta.nombre}" class="card-image" 
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg=='">
            <h2 class="card-name">${carta.numero}. ${carta.nombre}</h2>
        `;
    }


    function actualizarListaCartas() {
        if (cartasMostradas.length === 0) {
            cardsList.innerHTML = '<li style="text-align: center; color: #999; font-style: italic;">Ninguna carta ha salido aún...</li>';
            return;
        }

        cardsList.innerHTML = cartasMostradas
            .map(carta => `<li>${carta.numero}. ${carta.nombre}</li>`)
            .join('');
    }

    function actualizarEstadisticas() {
        cartaActualSpan.textContent = cartasMostradas.length;
        cartasRestantesSpan.textContent = cartasDisponibles.length;
    }

    function mostrarFinJuego() {
        cardDisplay.innerHTML = `
            <div class="welcome-message">
                <h2>🎉 ¡Juego Terminado! 🎉</h2>
                <p>¡Todas las cartas han salido!</p>
                <p style="margin-top: 20px;">Presiona "Reiniciar" para jugar de nuevo</p>
            </div>
        `;
        siguienteBtn.disabled = true;
    }

    function reiniciarJuego() {
        cartasDisponibles = [];
        cartasMostradas = [];
        juegoIniciado = false;
        cartaActual = null;
        
        iniciarBtn.disabled = false;
        siguienteBtn.disabled = true;
        gameInfo.style.display = 'none';
        
        cardDisplay.innerHTML = `
            <div class="welcome-message">
                <h2>¡Bienvenido a la Lotería Guatemalteca! 🎊</h2>
                <p>Presiona "Iniciar Juego" para comenzar</p>
            </div>
        `;
        
        actualizarListaCartas();
        cartaActualSpan.textContent = '0';
        cartasRestantesSpan.textContent = '54';
    }

    // Inicializar la aplicación
    actualizarListaCartas();