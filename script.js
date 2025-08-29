// Datos de las cartas
    const cartas = [
        {numero: 1, nombre: "el gallo", archivo: "1 el gallo-min.jpg", descripcion: "\"Quiquiriquí madrugador, si no te despiertas, ¡se acaba el amor!\""},
        {numero: 2, nombre: "el diablito", archivo: "2 el diablito-min.jpg", descripcion: "\"Con cola y cuernitos viene a molestar, pero en la lotería ¡también quiere ganar!\""},
        {numero: 3, nombre: "la dama", archivo: "3 la dama-min.jpg", descripcion: "\"Con vestido elegante y paso cortés, ¡quiere frijolitos de los pies a la cabeza!\""},
        {numero: 4, nombre: "el catrín", archivo: "4 el catrin-min.jpg", descripcion: "\"De sombrero y bastón bien vestido, presume dinero… ¡aunque esté perdido!\""},
        {numero: 5, nombre: "el paraguas", archivo: "5 el paraguas-min.jpg", descripcion: "\"Con lluvia o sol me verás pasar, pero si hace viento… ¡me voy a volar!\""},
        {numero: 6, nombre: "la sirena", archivo: "6-la-sirena-min.jpg", descripcion: "\"Cantando en el mar con dulce voz, ¡cuidado que te atrapa con su adiós!\""},
        {numero: 7, nombre: "la escalera", archivo: "7 la escalera-min.jpg", descripcion: "\"Sube, sube sin parar, pero si te caes… ¡te van a cargar!\""},
        {numero: 8, nombre: "la botella", archivo: "8 la botella-min.jpg", descripcion: "\"Llena o vacía, de vino o de ron, ¡la fiesta comienza con esta canción!\""},
        {numero: 9, nombre: "el barril", archivo: "9 barril-min.jpg", descripcion: "\"Pesado y redondo, guardián del licor, ¡si lo destapas pierdes el pudor!\""},
        {numero: 10, nombre: "el árbol", archivo: "10 arbol-min.jpg", descripcion: "\"Sombrilla natural, fresco y cabal, ¡aquí descansa hasta el animal!\""},
        {numero: 11, nombre: "el melón", archivo: "11 melon-min.jpg", descripcion: "\"Verde por fuera, rojo por dentro, ¡si no me pruebas, te vas al infierno!\""},
        {numero: 12, nombre: "el valiente", archivo: "12 el valiente-min.jpg", descripcion: "\"Con pecho erguido y espada en la mano, ¡pero se asusta si le sale un gusano!\""},
        {numero: 13, nombre: "el gorrito", archivo: "13 el gorrito-min.jpg", descripcion: "\"Chiquito y coquetón, ¡se me voló con el ventarrón!\""},
        {numero: 14, nombre: "la muerte", archivo: "14 la muerte-min.jpg", descripcion: "\"Con la guadaña viene a bailar, ¡si no te escondes, te va a alcanzar!\""},
        {numero: 15, nombre: "la pera", archivo: "15 la pera-min.jpg", descripcion: "\"Jugosa y dulce, no la dejes caer, ¡si rueda la pera, se echa a perder!\""},
        {numero: 16, nombre: "la bandera", archivo: "16 la bandera-min.jpg", descripcion: "\"Rojo, blanco y verde ondeando está, ¡si no la respetas, te va a regañar!\""},
        {numero: 17, nombre: "el bandolón", archivo: "17 el bandolon-min.jpg", descripcion: "\"Con cuerdas sonoras, suena el fandango, ¡pero cuidado que pesa tanto!\""},
        {numero: 18, nombre: "el violoncello", archivo: "18 el violoncello-min.jpg", descripcion: "\"Cuerdas profundas, voz de emoción, ¡quien lo acaricia despierta pasión!\""},
        {numero: 19, nombre: "la garza", archivo: "19 la garza-min.jpg", descripcion: "\"Patas largas, cuello estirado, ¡camina elegante todo el mercado!\""},
        {numero: 20, nombre: "el pájaro", archivo: "20 el pajaro-min.jpg", descripcion: "\"Pío, pío canta sin cesar, ¡si le abres la jaula se va a escapar!\""},
        {numero: 21, nombre: "la mano", archivo: "21 la mano-min.jpg", descripcion: "\"Con cinco deditos que saben contar, ¡pero si es traviesa te va a pellizcar!\""},
        {numero: 22, nombre: "la bota", archivo: "22 la bota-min.jpg", descripcion: "\"De cuero curtido, fuerte y formal, ¡pero si está rota no sirve pa' bailar!\""},
        {numero: 23, nombre: "la luna", archivo: "23 la luna-min.jpg", descripcion: "\"De noche me asomo redonda y coqueta, ¡cuidado que inspiro hasta al poeta!\""},
        {numero: 24, nombre: "el cotorro", archivo: "24 el cotorro-min.jpg", descripcion: "\"Habla y repite lo que oyó, ¡pero si le cuentas chismes, peor quedó!\""},
        {numero: 25, nombre: "el borracho", archivo: "25 el borracho-min.jpg", descripcion: "\"Con paso torcido y copa en la mano, ¡ya no distingue ni el día ni el verano!\""},
        {numero: 26, nombre: "el negrito", archivo: "26 el negrito-min.jpg", descripcion: "\"Con sonrisa amplia y tambor de sabor, ¡pone a todos a bailar de amor!\""},
        {numero: 27, nombre: "el corazón", archivo: "27 el corazon-min.jpg", descripcion: "\"Late que late en mi interior, ¡pero si te rompen se acaba el amor!\""},
        {numero: 28, nombre: "la sandía", archivo: "28 la sandia-min.jpg", descripcion: "\"Rayada por fuera, dulce por dentro, ¡partida en la mesa es puro contento!\""},
        {numero: 29, nombre: "el tambor", archivo: "29 el tambor-min.jpg", descripcion: "\"Con redoble alegre te pone a marchar, ¡pero si lo tocas no te deja parar!\""},
        {numero: 30, nombre: "el camarón", archivo: "30 el camaron-min.jpg", descripcion: "\"Caminando de lado se va el bribón, ¡no sabe de frente ni la dirección!\""},
        {numero: 31, nombre: "las jaras", archivo: "31 las jaras-min.jpg", descripcion: "\"Con arco y flecha apuntan al blanco, ¡pero si fallan, se ríen de tanto!\""},
        {numero: 32, nombre: "el músico", archivo: "32 el musico-min.jpg", descripcion: "\"Con notas y canto alegra la vida, ¡aunque a veces la nota está perdida!\""},
        {numero: 33, nombre: "la araña", archivo: "33 la arana-min.jpg", descripcion: "\"Teje que teje su telaraña, ¡y si te descuidas, te da una patada!\""},
        {numero: 34, nombre: "el soldado", archivo: "34 el soldado-min.jpg", descripcion: "\"Con casco y fusil, firme en su andar, ¡pero en la cantina se va a emborrachar!\""},
        {numero: 35, nombre: "la estrella", archivo: "35 la estrella-min.jpg", descripcion: "\"Brilla en el cielo, pequeña y bonita, ¡si pides un deseo, quizá se repita!\""},
        {numero: 36, nombre: "el cazo", archivo: "36 el cazo-min.jpg", descripcion: "\"De cobre brilloso pa' cocinar, ¡pero cuidado que te va a quemar!\""},
        {numero: 37, nombre: "el mundo", archivo: "37 el mundo-min.jpg", descripcion: "\"Redondo y viajero gira sin parar, ¡y al que se marea lo hace vomitar!\""},
        {numero: 38, nombre: "el apache", archivo: "38 el apache-min.jpg", descripcion: "\"Con flecha en la mano y grito feroz, ¡no te acerques o te da un soponcio atroz!\""},
        {numero: 39, nombre: "el nopal", archivo: "39 el nopal-min.jpg", descripcion: "\"Con tunas rojas y espinas mil, ¡si lo agarras mal te vas a arrepentir!\""},
        {numero: 40, nombre: "el alacrán", archivo: "40 el alacran-min.jpg", descripcion: "\"Con cola ponzoñosa camina ligero, ¡cuidado que pica aunque sea sincero!\""},
        {numero: 41, nombre: "la rosa", archivo: "41 la rosa-min.jpg", descripcion: "\"Linda y fragante con gran color, ¡pero cuidado con su espinador!\""},
        {numero: 42, nombre: "la calavera", archivo: "42 la calavera-min.jpg", descripcion: "\"De risa burlona y dientes pelados, ¡te espera al final con brazos cruzados!\""},
        {numero: 43, nombre: "la campana", archivo: "43 la campana-min.jpg", descripcion: "\"Tilín, tilín suena sin parar, ¡si no vas a misa te va a regañar!\""},
        {numero: 44, nombre: "el cantarito", archivo: "44 el cantarito-min.jpg", descripcion: "\"De barro humilde guarda el mezcal, ¡pero si se rompe se arma el llorar!\""},
        {numero: 45, nombre: "el venado", archivo: "45 el venado-min.jpg", descripcion: "\"Con cuernos grandes corre veloz, ¡pero si lo cazan ya no hay arroz!\""},
        {numero: 46, nombre: "el sol", archivo: "46 el sol-min.jpg", descripcion: "\"Calienta y brilla con gran poder, ¡pero si te descuidas te hace toser!\""},
        {numero: 47, nombre: "la corona", archivo: "47 la corona-min.jpg", descripcion: "\"De oro y piedras en la realeza, ¡pero al pobre nunca le pesa!\""},
        {numero: 48, nombre: "la chalupa", archivo: "48 la chalupa-min.jpg", descripcion: "\"En el río flotando con flores va, ¡si se voltea nadie la va a salvar!\""},
        {numero: 49, nombre: "el pino", archivo: "49 el pino-min.jpg", descripcion: "\"Verde y frondoso en la montaña está, ¡hasta en Navidad se quiere cortar!\""},
        {numero: 50, nombre: "el pescado", archivo: "50 el pescado-min.jpg", descripcion: "\"Nada y salta en el río feliz, ¡pero en la sartén ya no dice ni 'piz'!\""},
        {numero: 51, nombre: "la palma", archivo: "51 la palma-min.jpg", descripcion: "\"Alta y delgada en la playa está, ¡con cocos arriba que quieren bajar!\""},
        {numero: 52, nombre: "la maceta", archivo: "52 la maceta-min.jpg", descripcion: "\"Con tierra y flores alegre se ve, ¡pero si la tiras se rompe, ¡olé!\""},
        {numero: 53, nombre: "el arpa", archivo: "53 el arpa-min.jpg", descripcion: "\"Con cuerdas divinas al cielo suena, ¡si la tocas mal, la gente truena!\""},
        {numero: 54, nombre: "la rana", archivo: "54 la rana-min.jpg", descripcion: "\"Croa que croa junto al estanque, ¡si no cae lluvia se queda en el banque!\""}
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