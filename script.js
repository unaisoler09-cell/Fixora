const categorias = {
    mobile: [
        "Mi móvil se calienta demasiado",
        "La batería dura poco",
        "Mi móvil va lento",
        "Los juegos tienen pocos FPS",
        "Mi móvil no carga correctamente",
        "Tengo problemas con el Wi-Fi o los datos móviles"
    ],

    computer: [
        "Mi ordenador va lento",
        "Mi ordenador se calienta demasiado",
        "Los juegos tienen pocos FPS",
        "Mi ordenador hace mucho ruido",
        "Mi ordenador no enciende",
        "Tengo problemas con Internet"
    ],

    console: [
        "Mi consola se calienta demasiado",
        "Mi consola hace mucho ruido",
        "Los juegos tienen tirones o pocos FPS",
        "Mi consola no enciende",
        "Mi consola se apaga sola",
        "El mando no se conecta"
    ],

    printer: [
        "Mi impresora no imprime",
        "La impresión sale con mala calidad",
        "La impresora no reconoce los cartuchos",
        "El papel se atasca",
        "La impresora no se conecta al Wi-Fi",
        "La impresora aparece como desconectada"
    ]
};


/* =========================
   MOSTRAR PROBLEMAS
========================= */

function mostrarProblemas(categoria) {

    const app = document.getElementById("app");

    const nombres = {
        mobile: "📱 Problemas de móviles",
        computer: "💻 Problemas de ordenadores",
        console: "🎮 Problemas de consolas",
        printer: "🖨️ Problemas de impresoras"
    };

    let html = `
        <section class="hero">
            <h1>${nombres[categoria]}</h1>
            <p>Selecciona el problema que tienes.</p>
        </section>

        <section class="problems">
    `;

    categorias[categoria].forEach(problema => {

        html += `
            <button class="problem-button" onclick='iniciarProblema(${JSON.stringify(problema)}, "${categoria}")'>
                ${problema}
            </button>
        `;

    });

    html += `
        </section>

        <button class="back-button" onclick="location.reload()">
            ← Volver
        </button>
    `;

    app.innerHTML = html;
}


/* =========================
   INICIAR PROBLEMA
========================= */

function iniciarProblema(problema, categoria = "") {

    /* 📱 MÓVIL */

    if (categoria === "mobile" && problema === "Mi móvil se calienta demasiado") {
        diagnosticoCalor();
        return;
    }

    if (categoria === "mobile" && problema === "La batería dura poco") {
        diagnosticoBateria();
        return;
    }

    if (categoria === "mobile" && problema === "Mi móvil va lento") {
        diagnosticoMovilLento();
        return;
    }

    if (categoria === "mobile" && problema === "Los juegos tienen pocos FPS") {
        diagnosticoFPS();
        return;
    }

    if (categoria === "mobile" && problema === "Mi móvil no carga correctamente") {
        diagnosticoCarga();
        return;
    }

    if (
        categoria === "mobile" &&
        problema === "Tengo problemas con el Wi-Fi o los datos móviles"
    ) {
        diagnosticoInternetMovil();
        return;
    }


    /* 💻 ORDENADOR */

    if (categoria === "computer" && problema === "Mi ordenador va lento") {
        diagnosticoOrdenadorLento();
        return;
    }

    if (categoria === "computer" && problema === "Mi ordenador se calienta demasiado") {
        diagnosticoCalorOrdenador();
        return;
    }

    if (categoria === "computer" && problema === "Los juegos tienen pocos FPS") {
        diagnosticoFPSOrdenador();
        return;
    }

    if (categoria === "computer" && problema === "Mi ordenador hace mucho ruido") {
        diagnosticoRuidoOrdenador();
        return;
    }

    if (categoria === "computer" && problema === "Mi ordenador no enciende") {
        diagnosticoOrdenadorNoEnciende();
        return;
    }

    if (categoria === "computer" && problema === "Tengo problemas con Internet") {
        diagnosticoInternetOrdenador();
        return;
    }


    /* 🎮 CONSOLA */

    if (categoria === "console" && problema === "Mi consola se calienta demasiado") {
        diagnosticoCalorConsola();
        return;
    }

    if (categoria === "console" && problema === "Mi consola hace mucho ruido") {
        diagnosticoRuidoConsola();
        return;
    }

    if (
        categoria === "console" &&
        problema === "Los juegos tienen tirones o pocos FPS"
    ) {
        diagnosticoFPSConsola();
        return;
    }

    if (
        categoria === "console" &&
        problema === "Mi consola no enciende"
    ) {
        diagnosticoNoEnciendeConsola();
        return;
    }

    if (
        categoria === "console" &&
        problema === "Mi consola se apaga sola"
    ) {
        diagnosticoApagadoConsola();
        return;
    }

    if (
        categoria === "console" &&
        problema === "El mando no se conecta"
    ) {
        diagnosticoMandoConsola();
        return;
    }


    mostrarProximamente(problema);
}


/* =========================
   PREGUNTA
========================= */

function pregunta(texto, opciones, siguiente, paso = 1, total = 2) {

    const app = document.getElementById("app");

    const porcentaje = Math.min((paso / total) * 100, 100);

    let html = `
        <section class="hero">
            <h1>${texto}</h1>
        </section>

        <div class="diagnostic-progress">

            <div class="progress-info">
                <span>Paso ${paso} de ${total}</span>
                <strong>${Math.round(porcentaje)}%</strong>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width:${porcentaje}%"></div>
            </div>

        </div>

        <section class="problems">
    `;

    opciones.forEach(opcion => {

        html += `
            <button class="problem-button" onclick='${siguiente.name}(${JSON.stringify(opcion)})'>
                ${opcion}
            </button>
        `;

    });

    html += `
        </section>

        <button class="back-button" onclick="location.reload()">
            ← Volver
        </button>
    `;

    app.innerHTML = html;
}


/* =========================
   RESULTADO
========================= */

function resultado(titulo, soluciones) {

    const app = document.getElementById("app");

    let html = `
        <section class="hero">

            <div class="diagnostic-complete">
                ✓ Diagnóstico completado
            </div>

            <h1>${titulo}</h1>

            <p>Prueba estas posibles soluciones:</p>

        </section>

        <section class="problems">
    `;

    soluciones.forEach(solucion => {

        html += `
            <div class="problem-button">
                ${solucion}
            </div>
        `;

    });

    html += `
        </section>

        <button class="back-button" onclick="location.reload()">
            ← Volver al inicio
        </button>
    `;

    app.innerHTML = html;
}


/* =========================
   PRÓXIMAMENTE
========================= */

function mostrarProximamente(problema) {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="hero">

            <h1>${problema}</h1>

            <p>
                Este diagnóstico todavía está en desarrollo.
            </p>

        </section>

        <button class="back-button" onclick="location.reload()">
            ← Volver al inicio
        </button>
    `;
}


/* =========================================================
   📱 MÓVIL — CALOR
========================================================= */

function diagnosticoCalor() {

    pregunta(
        "¿Cuándo se calienta más tu móvil?",
        [
            "Mientras juego",
            "Mientras carga",
            "Incluso sin usarlo",
            "En cualquier situación"
        ],
        diagnosticoCalorPaso2,
        1,
        2
    );
}

function diagnosticoCalorPaso2(opcion) {

    if (opcion === "Mientras juego") {

        resultado(
            "El calor puede estar relacionado con el uso intensivo",
            [
                "Reduce el brillo de la pantalla.",
                "Cierra aplicaciones que no estés utilizando.",
                "Evita jugar mientras el móvil está cargando.",
                "Comprueba que las zonas de ventilación no estén tapadas.",
                "Si alcanza temperaturas muy altas de forma habitual, deja que se enfríe."
            ]
        );

        return;
    }

    if (opcion === "Mientras carga") {

        resultado(
            "El calor puede estar relacionado con la carga",
            [
                "Utiliza el cargador y cable adecuados para el móvil.",
                "Evita utilizar juegos o aplicaciones pesadas mientras carga.",
                "No lo dejes debajo de una almohada o sobre superficies que acumulen calor.",
                "Si se calienta demasiado durante la carga, desconéctalo y deja que se enfríe."
            ]
        );

        return;
    }

    if (opcion === "Incluso sin usarlo") {

        resultado(
            "Puede haber una aplicación o proceso funcionando en segundo plano",
            [
                "Revisa qué aplicaciones consumen más batería.",
                "Cierra aplicaciones que estén funcionando sin necesidad.",
                "Reinicia el móvil.",
                "Comprueba si hay actualizaciones del sistema.",
                "Si continúa calentándose sin usarlo, conviene revisarlo."
            ]
        );

        return;
    }

    resultado(
        "El calentamiento puede tener varias causas",
        [
            "Comprueba qué aplicaciones consumen más recursos.",
            "Reduce el brillo de pantalla.",
            "Evita utilizar juegos exigentes durante mucho tiempo seguido.",
            "Mantén el móvil actualizado.",
            "Si se calienta excesivamente incluso sin usarlo, conviene revisarlo."
        ]
    );
}


/* =========================================================
   📱 MÓVIL — BATERÍA
========================================================= */

function diagnosticoBateria() {

    pregunta(
        "¿Cuándo notas que la batería dura menos?",
        [
            "Mientras juego",
            "Usando redes sociales o vídeos",
            "Aunque apenas use el móvil",
            "En cualquier situación"
        ],
        diagnosticoBateriaPaso2,
        1,
        2
    );
}

function diagnosticoBateriaPaso2(opcion) {

    if (opcion === "Mientras juego") {

        resultado(
            "Los juegos consumen mucha batería",
            [
                "Reduce el brillo de pantalla.",
                "Limita los FPS si el juego lo permite.",
                "Reduce la calidad gráfica si no necesitas el máximo rendimiento.",
                "Evita jugar mientras cargas el móvil.",
                "Comprueba la temperatura del dispositivo."
            ]
        );

        return;
    }

    if (opcion === "Usando redes sociales o vídeos") {

        resultado(
            "La pantalla y el contenido multimedia pueden aumentar el consumo",
            [
                "Reduce el brillo.",
                "Desactiva funciones que no necesites.",
                "Comprueba qué aplicaciones consumen más batería.",
                "Mantén las aplicaciones actualizadas.",
                "Activa el ahorro de batería cuando necesites mayor autonomía."
            ]
        );

        return;
    }

    if (opcion === "Aunque apenas use el móvil") {

        resultado(
            "Puede existir consumo en segundo plano",
            [
                "Revisa el consumo de batería por aplicación.",
                "Comprueba qué aplicaciones funcionan en segundo plano.",
                "Reinicia el móvil.",
                "Comprueba si hay actualizaciones.",
                "Si la batería sigue bajando rápidamente sin utilizar el móvil, puede necesitar revisión."
            ]
        );

        return;
    }

    resultado(
        "El consumo puede tener varias causas",
        [
            "Comprueba el consumo de batería por aplicación.",
            "Reduce el brillo.",
            "Desactiva funciones que no estés utilizando.",
            "Revisa las aplicaciones que funcionan en segundo plano.",
            "Mantén el sistema actualizado."
        ]
    );
}


/* =========================================================
   📱 MÓVIL — LENTO
========================================================= */

function diagnosticoMovilLento() {

    pregunta(
        "¿Cuándo notas que el móvil va lento?",
        [
            "Siempre",
            "Solo con algunas aplicaciones",
            "Después de usarlo durante mucho tiempo",
            "Cuando tengo muchas aplicaciones abiertas"
        ],
        diagnosticoMovilLentoPaso2,
        1,
        2
    );
}

function diagnosticoMovilLentoPaso2(opcion) {

    if (opcion === "Siempre") {

        resultado(
            "El rendimiento general puede estar afectado",
            [
                "Reinicia el móvil.",
                "Comprueba cuánto almacenamiento libre tienes.",
                "Actualiza el sistema.",
                "Actualiza las aplicaciones.",
                "Cierra aplicaciones que no necesites."
            ]
        );

        return;
    }

    if (opcion === "Solo con algunas aplicaciones") {

        resultado(
            "El problema puede estar relacionado con esas aplicaciones",
            [
                "Actualiza las aplicaciones afectadas.",
                "Comprueba si tienen demasiada caché o datos acumulados.",
                "Cierra y vuelve a abrir la aplicación.",
                "Comprueba si el problema ocurre también después de reiniciar el móvil."
            ]
        );

        return;
    }

    if (opcion === "Después de usarlo durante mucho tiempo") {

        resultado(
            "Puede estar relacionado con temperatura o procesos acumulados",
            [
                "Deja descansar el móvil unos minutos.",
                "Cierra aplicaciones abiertas.",
                "Comprueba la temperatura.",
                "Reinicia el dispositivo si lleva mucho tiempo encendido."
            ]
        );

        return;
    }

    resultado(
        "Puede haber demasiados procesos activos",
        [
            "Cierra aplicaciones que no estés utilizando.",
            "Reinicia el móvil.",
            "Comprueba qué aplicaciones consumen más memoria.",
            "Mantén el sistema y las aplicaciones actualizados."
        ]
    );
}


/* =========================================================
   📱 MÓVIL — FPS
========================================================= */

function diagnosticoFPS() {

    pregunta(
        "¿Los pocos FPS ocurren en todos los juegos?",
        [
            "Sí, en todos",
            "Solo en algunos",
            "No estoy seguro"
        ],
        diagnosticoFPSPaso2,
        1,
        2
    );
}

function diagnosticoFPSPaso2(opcion) {

    if (opcion === "Sí, en todos") {

        pregunta(
            "¿Los FPS bajan todavía más cuando aumentas los gráficos?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoFPSResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Solo en algunos") {

        resultado(
            "El problema puede estar relacionado con esos juegos",
            [
                "Reduce la calidad gráfica.",
                "Reduce los FPS máximos si el juego ofrece esa opción.",
                "Cierra aplicaciones en segundo plano.",
                "Comprueba si el juego tiene actualizaciones.",
                "Revisa si el dispositivo se calienta demasiado mientras juegas."
            ]
        );

        return;
    }

    resultado(
        "Conviene comprobar el rendimiento durante el juego",
        [
            "Prueba otro juego para comparar.",
            "Cierra aplicaciones en segundo plano.",
            "Comprueba la temperatura.",
            "Reduce temporalmente la calidad gráfica.",
            "Comprueba si el juego está actualizado."
        ]
    );
}

function diagnosticoFPSResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "La calidad gráfica está afectando al rendimiento",
            [
                "Reduce la calidad gráfica.",
                "Reduce sombras y efectos si el juego lo permite.",
                "Limita los FPS a un valor estable.",
                "Cierra aplicaciones en segundo plano.",
                "Comprueba la temperatura del móvil."
            ]
        );

        return;
    }

    resultado(
        "Puede haber otro problema de rendimiento",
        [
            "Reinicia el móvil.",
            "Cierra aplicaciones en segundo plano.",
            "Comprueba el almacenamiento disponible.",
            "Actualiza el sistema y los juegos.",
            "Comprueba la temperatura mientras juegas."
        ]
    );
}


/* =========================================================
   📱 MÓVIL — CARGA
========================================================= */

function diagnosticoCarga() {

    pregunta(
        "¿Qué ocurre cuando conectas el cargador?",
        [
            "No carga nada",
            "Carga muy lentamente",
            "Empieza a cargar y después se detiene",
            "Carga normalmente"
        ],
        diagnosticoCargaPaso2,
        1,
        2
    );
}

function diagnosticoCargaPaso2(opcion) {

    if (opcion === "No carga nada") {

        resultado(
            "Comprueba primero la conexión de carga",
            [
                "Prueba otro enchufe.",
                "Comprueba que el cable esté bien conectado.",
                "Prueba otro cable compatible.",
                "Revisa visualmente el puerto de carga por si tiene suciedad.",
                "Si sigue sin cargar, puede necesitar revisión."
            ]
        );

        return;
    }

    if (opcion === "Carga muy lentamente") {

        resultado(
            "Puede estar utilizando una carga más lenta de lo esperado",
            [
                "Comprueba que utilizas el cargador adecuado.",
                "Comprueba el cable.",
                "Evita utilizar aplicaciones exigentes mientras carga.",
                "Comprueba la temperatura del móvil.",
                "Prueba otro cargador compatible si tienes uno."
            ]
        );

        return;
    }

    if (opcion === "Empieza a cargar y después se detiene") {

        resultado(
            "Puede existir un problema de conexión o temperatura",
            [
                "Comprueba el cable y el puerto.",
                "Prueba otro cable compatible.",
                "Comprueba si el móvil está demasiado caliente.",
                "Prueba otro enchufe.",
                "Si continúa ocurriendo, conviene revisarlo."
            ]
        );

        return;
    }

    resultado(
        "La carga parece funcionar correctamente",
        [
            "Utiliza un cargador compatible.",
            "Mantén el puerto de carga limpio.",
            "Evita temperaturas excesivamente altas.",
            "Si aparecen problemas posteriormente, vuelve a realizar el diagnóstico."
        ]
    );
}


/* =========================================================
   📱 MÓVIL — INTERNET
========================================================= */

function diagnosticoInternetMovil() {

    pregunta(
        "¿Dónde tienes el problema?",
        [
            "Wi-Fi",
            "Datos móviles",
            "En ambos",
            "No estoy seguro"
        ],
        diagnosticoInternetMovilPaso2,
        1,
        2
    );
}

function diagnosticoInternetMovilPaso2(opcion) {

    if (opcion === "Wi-Fi") {

        resultado(
            "Comprueba la conexión Wi-Fi",
            [
                "Desactiva y vuelve a activar el Wi-Fi.",
                "Reinicia el móvil.",
                "Reinicia el router.",
                "Comprueba si otros dispositivos tienen Internet.",
                "Acércate al router para comprobar si mejora la señal."
            ]
        );

        return;
    }

    if (opcion === "Datos móviles") {

        resultado(
            "Comprueba la conexión de datos móviles",
            [
                "Comprueba que los datos móviles estén activados.",
                "Comprueba la cobertura.",
                "Activa y desactiva el modo avión.",
                "Reinicia el móvil.",
                "Comprueba que tu tarifa tenga datos disponibles."
            ]
        );

        return;
    }

    if (opcion === "En ambos") {

        resultado(
            "Puede existir un problema general de conexión",
            [
                "Reinicia el móvil.",
                "Activa y desactiva el modo avión.",
                "Comprueba si hay actualizaciones del sistema.",
                "Comprueba la conexión en otro dispositivo.",
                "Si ambos tipos de conexión fallan, conviene revisar la configuración de red."
            ]
        );

        return;
    }

    resultado(
        "Comprueba ambos tipos de conexión",
        [
            "Prueba Wi-Fi y datos móviles por separado.",
            "Reinicia el móvil.",
            "Activa y desactiva el modo avión.",
            "Comprueba la cobertura.",
            "Comprueba si otros dispositivos tienen Internet."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — LENTO
========================================================= */

function diagnosticoOrdenadorLento() {

    pregunta(
        "¿Cuándo notas que el ordenador va lento?",
        [
            "Siempre",
            "Al abrir programas",
            "Mientras juego",
            "Después de muchas horas encendido"
        ],
        diagnosticoOrdenadorLentoPaso2,
        1,
        2
    );
}

function diagnosticoOrdenadorLentoPaso2(opcion) {

    if (opcion === "Siempre") {

        resultado(
            "El rendimiento general puede estar limitado",
            [
                "Reinicia el ordenador.",
                "Comprueba cuánto espacio libre tienes.",
                "Abre el Administrador de tareas y revisa CPU, memoria y disco.",
                "Cierra programas innecesarios.",
                "Comprueba si Windows tiene actualizaciones pendientes."
            ]
        );

        return;
    }

    if (opcion === "Al abrir programas") {

        resultado(
            "Puede haber demasiados procesos cargándose",
            [
                "Revisa las aplicaciones que se ejecutan al iniciar Windows.",
                "Cierra programas que no necesites.",
                "Comprueba el uso de memoria en el Administrador de tareas.",
                "Mantén suficiente espacio libre en el disco."
            ]
        );

        return;
    }

    if (opcion === "Mientras juego") {

        resultado(
            "El juego puede estar utilizando demasiados recursos",
            [
                "Reduce la calidad gráfica.",
                "Cierra programas en segundo plano.",
                "Comprueba la temperatura.",
                "Comprueba el uso de CPU y GPU.",
                "Actualiza el juego y los controladores cuando corresponda."
            ]
        );

        return;
    }

    resultado(
        "Puede estar relacionado con procesos acumulados",
        [
            "Reinicia el ordenador.",
            "Cierra programas que no estés utilizando.",
            "Comprueba el Administrador de tareas.",
            "Comprueba la temperatura del equipo."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — CALOR
========================================================= */

function diagnosticoCalorOrdenador() {

    pregunta(
        "¿Cuándo se calienta más el ordenador?",
        [
            "Mientras juego",
            "Con programas pesados",
            "Incluso estando sin hacer nada",
            "En cualquier situación"
        ],
        diagnosticoCalorOrdenadorPaso2,
        1,
        2
    );
}

function diagnosticoCalorOrdenadorPaso2(opcion) {

    if (opcion === "Mientras juego") {

        resultado(
            "Los juegos pueden aumentar mucho la temperatura",
            [
                "Comprueba que las rejillas de ventilación estén libres.",
                "No coloques el ordenador en un lugar cerrado.",
                "Reduce la carga gráfica del juego si es necesario.",
                "Comprueba las temperaturas mientras juegas.",
                "Si aparecen apagados por temperatura, conviene revisarlo."
            ]
        );

        return;
    }

    if (opcion === "Con programas pesados") {

        resultado(
            "El uso elevado de CPU o GPU puede aumentar la temperatura",
            [
                "Comprueba el uso de CPU y GPU.",
                "Cierra programas que no necesites.",
                "Asegúrate de que el equipo tenga buena ventilación.",
                "Evita bloquear las entradas y salidas de aire."
            ]
        );

        return;
    }

    if (opcion === "Incluso estando sin hacer nada") {

        resultado(
            "Puede haber procesos funcionando en segundo plano",
            [
                "Abre el Administrador de tareas.",
                "Comprueba qué procesos utilizan más CPU.",
                "Reinicia el ordenador.",
                "Comprueba que las ventilaciones estén libres.",
                "Si continúa calentándose sin carga, conviene revisarlo."
            ]
        );

        return;
    }

    resultado(
        "La temperatura puede depender de varios factores",
        [
            "Comprueba la ventilación.",
            "Revisa el uso de CPU y GPU.",
            "Cierra programas innecesarios.",
            "Evita colocar el ordenador en espacios cerrados."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — FPS
========================================================= */

function diagnosticoFPSOrdenador() {

    pregunta(
        "¿Los pocos FPS ocurren en todos los juegos?",
        [
            "Sí, en todos",
            "Solo en algunos",
            "No estoy seguro"
        ],
        diagnosticoFPSOrdenadorPaso2,
        1,
        2
    );
}

function diagnosticoFPSOrdenadorPaso2(opcion) {

    if (opcion === "Sí, en todos") {

        pregunta(
            "¿Los FPS bajan más cuando aumentas los gráficos?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoFPSOrdenadorResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Solo en algunos") {

        resultado(
            "El problema puede estar relacionado con esos juegos",
            [
                "Reduce la calidad gráfica.",
                "Reduce sombras y efectos.",
                "Comprueba si el juego tiene actualizaciones.",
                "Cierra aplicaciones en segundo plano.",
                "Comprueba la temperatura del ordenador."
            ]
        );

        return;
    }

    resultado(
        "Conviene comparar el rendimiento entre juegos",
        [
            "Prueba otro juego.",
            "Comprueba la temperatura.",
            "Cierra programas en segundo plano.",
            "Reduce temporalmente los gráficos.",
            "Comprueba el uso de CPU y GPU."
        ]
    );
}

function diagnosticoFPSOrdenadorResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "La carga gráfica está afectando al rendimiento",
            [
                "Reduce la calidad gráfica.",
                "Reduce sombras y efectos.",
                "Limita los FPS a un valor estable.",
                "Cierra programas en segundo plano.",
                "Comprueba las temperaturas."
            ]
        );

        return;
    }

    resultado(
        "Puede haber otro límite de rendimiento",
        [
            "Comprueba el uso de CPU y GPU.",
            "Comprueba la temperatura.",
            "Cierra programas innecesarios.",
            "Comprueba el espacio libre del disco.",
            "Mantén el juego y los controladores actualizados."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — RUIDO
========================================================= */

function diagnosticoRuidoOrdenador() {

    pregunta(
        "¿Cuándo hace más ruido el ordenador?",
        [
            "Mientras juego",
            "Con programas pesados",
            "Incluso sin hacer nada",
            "En cualquier situación"
        ],
        diagnosticoRuidoOrdenadorPaso2,
        1,
        2
    );
}

function diagnosticoRuidoOrdenadorPaso2(opcion) {

    if (opcion === "Mientras juego") {

        pregunta(
            "¿El ruido aumenta cuando el ordenador se calienta?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoRuidoOrdenadorResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Con programas pesados") {

        resultado(
            "Los ventiladores pueden estar aumentando su velocidad",
            [
                "Comprueba la temperatura.",
                "Comprueba el uso de CPU y GPU.",
                "Cierra programas que no necesites.",
                "Asegúrate de que el equipo tenga buena ventilación."
            ]
        );

        return;
    }

    if (opcion === "Incluso sin hacer nada") {

        pregunta(
            "¿El uso de CPU o GPU es alto cuando no haces nada?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoRuidoOrdenadorResultadoIdle,
            2,
            2
        );

        return;
    }

    resultado(
        "El ruido puede depender de la carga del equipo",
        [
            "Comprueba la temperatura.",
            "Comprueba el uso de CPU y GPU.",
            "Comprueba que la ventilación esté libre.",
            "Si aparece un ruido mecánico extraño o nuevo, conviene revisarlo."
        ]
    );
}

function diagnosticoRuidoOrdenadorResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "Los ventiladores probablemente están aumentando su velocidad",
            [
                "Comprueba la temperatura del ordenador.",
                "Asegúrate de que las ventilaciones estén libres.",
                "Reduce la carga gráfica si estás jugando.",
                "Evita colocar el ordenador en un espacio cerrado."
            ]
        );

        return;
    }

    resultado(
        "Puede existir otra causa del ruido",
        [
            "Comprueba si el ruido procede de los ventiladores.",
            "Comprueba si aparece con determinados programas.",
            "Si el ruido es mecánico, irregular o nuevo, conviene revisarlo."
        ]
    );
}

function diagnosticoRuidoOrdenadorResultadoIdle(opcion) {

    if (opcion === "Sí") {

        resultado(
            "Puede haber algún proceso utilizando recursos",
            [
                "Abre el Administrador de tareas.",
                "Comprueba qué programa utiliza más CPU.",
                "Cierra programas que no necesites.",
                "Reinicia el ordenador."
            ]
        );

        return;
    }

    resultado(
        "Puede ser ruido de refrigeración u otro componente",
        [
            "Comprueba la temperatura.",
            "Escucha si el ruido es constante o irregular.",
            "Comprueba que las ventilaciones estén libres.",
            "Si aparece un ruido mecánico nuevo, conviene revisarlo."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — NO ENCIENDE
========================================================= */

function diagnosticoOrdenadorNoEnciende() {

    pregunta(
        "¿Qué ocurre al pulsar el botón de encendido?",
        [
            "No hace absolutamente nada",
            "Se encienden luces o ventiladores",
            "Enciende pero no aparece imagen",
            "Enciende y se apaga inmediatamente"
        ],
        diagnosticoOrdenadorNoEnciendePaso2,
        1,
        2
    );
}

function diagnosticoOrdenadorNoEnciendePaso2(opcion) {

    if (opcion === "No hace absolutamente nada") {

        pregunta(
            "¿El ordenador está recibiendo corriente?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoOrdenadorSinRespuesta,
            2,
            2
        );

        return;
    }

    if (opcion === "Se encienden luces o ventiladores") {

        resultado(
            "El ordenador recibe corriente, pero puede haber un problema de arranque",
            [
                "Comprueba que el monitor esté encendido.",
                "Comprueba el cable de vídeo.",
                "Comprueba que el monitor tenga seleccionada la entrada correcta.",
                "Desconecta dispositivos USB innecesarios y prueba de nuevo."
            ]
        );

        return;
    }

    if (opcion === "Enciende pero no aparece imagen") {

        pregunta(
            "¿El monitor muestra algún mensaje?",
            [
                "Sí, muestra un mensaje",
                "No, la pantalla está completamente negra",
                "No estoy seguro"
            ],
            diagnosticoOrdenadorSinImagen,
            2,
            2
        );

        return;
    }

    resultado(
        "Puede existir un problema de alimentación o protección",
        [
            "Desconecta el ordenador y vuelve a conectarlo.",
            "Comprueba el cable de alimentación.",
            "Comprueba que no haya conexiones externas dañadas.",
            "Si continúa apagándose inmediatamente, conviene llevarlo a revisión."
        ]
    );
}

function diagnosticoOrdenadorSinRespuesta(opcion) {

    if (opcion === "Sí") {

        resultado(
            "Puede existir un problema de encendido",
            [
                "Comprueba el cable de alimentación.",
                "Prueba otro enchufe.",
                "Comprueba que el interruptor de la fuente, si existe, esté en la posición correcta.",
                "Si sigue sin reaccionar, conviene revisarlo."
            ]
        );

        return;
    }

    resultado(
        "El problema puede estar relacionado con la alimentación",
        [
            "Prueba otro enchufe.",
            "Comprueba el cable de alimentación.",
            "No abras la fuente de alimentación.",
            "Si continúa sin encender, busca asistencia técnica."
        ]
    );
}

function diagnosticoOrdenadorSinImagen(opcion) {

    if (opcion === "Sí, muestra un mensaje") {

        resultado(
            "El mensaje del monitor puede indicar la causa",
            [
                "Comprueba el cable de vídeo.",
                "Comprueba que el monitor esté en la entrada correcta.",
                "Prueba otro puerto de vídeo si está disponible.",
                "Reinicia el ordenador."
            ]
        );

        return;
    }

    resultado(
        "Puede existir un problema de señal de vídeo",
        [
            "Comprueba el cable de vídeo.",
            "Comprueba que el monitor esté encendido.",
            "Comprueba la entrada seleccionada en el monitor.",
            "Prueba otro puerto disponible.",
            "Si continúa sin imagen, conviene revisarlo."
        ]
    );
}


/* =========================================================
   💻 ORDENADOR — INTERNET
========================================================= */

function diagnosticoInternetOrdenador() {

    pregunta(
        "¿Cómo está conectado tu ordenador a Internet?",
        [
            "Wi-Fi",
            "Cable Ethernet",
            "No estoy seguro"
        ],
        diagnosticoInternetOrdenadorPaso2,
        1,
        2
    );
}

function diagnosticoInternetOrdenadorPaso2(opcion) {

    if (opcion === "Wi-Fi") {

        pregunta(
            "¿Qué problema tienes con el Wi-Fi?",
            [
                "No tengo Internet",
                "Va muy lento",
                "Se desconecta"
            ],
            diagnosticoInternetOrdenadorResultadoWifi,
            2,
            2
        );

        return;
    }

    if (opcion === "Cable Ethernet") {

        pregunta(
            "¿Qué problema tienes con la conexión?",
            [
                "No tengo Internet",
                "Va muy lento",
                "Se desconecta"
            ],
            diagnosticoInternetOrdenadorResultadoEthernet,
            2,
            2
        );

        return;
    }

    resultado(
        "Comprueba primero el tipo de conexión",
        [
            "Comprueba si utilizas Wi-Fi o Ethernet.",
            "Reinicia el ordenador.",
            "Comprueba si otros dispositivos tienen Internet.",
            "Reinicia el router si es necesario."
        ]
    );
}

function diagnosticoInternetOrdenadorResultadoWifi(opcion) {

    if (opcion === "No tengo Internet") {

        resultado(
            "Comprueba la conexión Wi-Fi",
            [
                "Desactiva y vuelve a activar el Wi-Fi.",
                "Reinicia el ordenador.",
                "Reinicia el router.",
                "Comprueba si otros dispositivos tienen Internet.",
                "Comprueba que estás conectado a la red correcta."
            ]
        );

        return;
    }

    if (opcion === "Va muy lento") {

        resultado(
            "Puede haber una señal Wi-Fi débil o saturación",
            [
                "Acércate al router.",
                "Comprueba si otros dispositivos también tienen problemas.",
                "Reinicia el router.",
                "Evita obstáculos entre el ordenador y el router si es posible."
            ]
        );

        return;
    }

    resultado(
        "La conexión Wi-Fi puede estar perdiendo estabilidad",
        [
            "Reinicia el router.",
            "Desactiva y vuelve a activar el Wi-Fi.",
            "Comprueba la señal.",
            "Comprueba si otros dispositivos también se desconectan."
        ]
    );
}

function diagnosticoInternetOrdenadorResultadoEthernet(opcion) {

    if (opcion === "No tengo Internet") {

        resultado(
            "Comprueba el cable Ethernet",
            [
                "Comprueba que el cable esté conectado correctamente.",
                "Prueba otro puerto del router.",
                "Prueba otro cable Ethernet si tienes uno.",
                "Reinicia el router y el ordenador."
            ]
        );

        return;
    }

    if (opcion === "Va muy lento") {

        resultado(
            "Puede existir un problema de conexión o red",
            [
                "Comprueba el cable Ethernet.",
                "Prueba otro puerto del router.",
                "Reinicia el router.",
                "Comprueba si otros dispositivos tienen la misma velocidad."
            ]
        );

        return;
    }

    resultado(
        "Puede existir una conexión Ethernet inestable",
        [
            "Comprueba el cable.",
            "Prueba otro puerto del router.",
            "Prueba otro cable si tienes uno.",
            "Reinicia el router y el ordenador."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — CALOR
========================================================= */

function diagnosticoCalorConsola() {

    pregunta(
        "¿Cuándo se calienta más tu consola?",
        [
            "Mientras juego",
            "Con juegos exigentes",
            "Incluso estando en el menú",
            "En cualquier situación"
        ],
        diagnosticoCalorConsolaPaso2,
        1,
        2
    );
}

function diagnosticoCalorConsolaPaso2(opcion) {

    if (
        opcion === "Mientras juego" ||
        opcion === "Con juegos exigentes"
    ) {

        pregunta(
            "¿La consola también hace mucho ruido cuando se calienta?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoCalorConsolaResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Incluso estando en el menú") {

        resultado(
            "La consola se está calentando incluso con poca carga",
            [
                "Comprueba que tenga espacio libre alrededor.",
                "No tapes las rejillas de ventilación.",
                "Evita colocarla dentro de un mueble cerrado.",
                "Comprueba que las rejillas no tengan polvo acumulado.",
                "Si continúa calentándose mucho sin jugar, conviene revisarla."
            ]
        );

        return;
    }

    resultado(
        "La temperatura puede depender de varios factores",
        [
            "Mantén la consola en un lugar bien ventilado.",
            "No bloquees las rejillas.",
            "Evita muebles cerrados.",
            "Comprueba externamente si las rejillas tienen polvo.",
            "Si aparecen avisos de temperatura o apagados, deja que se enfríe."
        ]
    );
}

function diagnosticoCalorConsolaResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "La refrigeración está trabajando con bastante intensidad",
            [
                "Asegúrate de que la consola tenga espacio alrededor.",
                "No tapes las rejillas de ventilación.",
                "Evita colocarla dentro de un mueble cerrado.",
                "Comprueba externamente si las rejillas tienen polvo.",
                "Si aparecen avisos de temperatura o apagados, deja que se enfríe y considera revisarla."
            ]
        );

        return;
    }

    resultado(
        "El calentamiento puede ser normal durante juegos exigentes",
        [
            "Mantén la consola en un espacio abierto.",
            "No bloquees las rejillas.",
            "Comprueba que no haya polvo acumulado externamente.",
            "Si la temperatura es excesiva o aparecen avisos, deja que se enfríe."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — RUIDO
========================================================= */

function diagnosticoRuidoConsola() {

    pregunta(
        "¿Cuándo hace más ruido tu consola?",
        [
            "Mientras juego",
            "Con juegos exigentes",
            "Incluso estando en el menú",
            "En cualquier situación"
        ],
        diagnosticoRuidoConsolaPaso2,
        1,
        2
    );
}

function diagnosticoRuidoConsolaPaso2(opcion) {

    if (
        opcion === "Mientras juego" ||
        opcion === "Con juegos exigentes"
    ) {

        pregunta(
            "¿El ruido aumenta cuando la consola se calienta?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoRuidoConsolaResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Incluso estando en el menú") {

        pregunta(
            "¿La consola también está caliente?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoRuidoConsolaMenuResultado,
            2,
            2
        );

        return;
    }

    resultado(
        "El ruido puede depender del sistema de refrigeración",
        [
            "Comprueba la temperatura.",
            "Mantén la consola en un espacio abierto.",
            "No bloquees las rejillas.",
            "Comprueba externamente si hay polvo.",
            "Si aparece un ruido mecánico o irregular nuevo, conviene revisarla."
        ]
    );
}

function diagnosticoRuidoConsolaResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "La refrigeración está aumentando su funcionamiento",
            [
                "Comprueba que la consola tenga buena ventilación.",
                "No bloquees las rejillas.",
                "Evita muebles cerrados.",
                "Comprueba externamente si hay polvo acumulado.",
                "Si el ruido es excesivo o aparecen avisos de temperatura, conviene revisarla."
            ]
        );

        return;
    }

    resultado(
        "Puede existir otra causa del ruido",
        [
            "Comprueba si el ruido procede del sistema de refrigeración.",
            "Observa si ocurre solo con determinados juegos.",
            "Comprueba la temperatura.",
            "Si es un ruido mecánico, irregular o nuevo, conviene revisarla."
        ]
    );
}

function diagnosticoRuidoConsolaMenuResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "La consola se está calentando incluso con poca carga",
            [
                "Comprueba que tenga espacio alrededor.",
                "No tapes las rejillas.",
                "Evita muebles cerrados.",
                "Comprueba externamente si las rejillas tienen polvo.",
                "Si continúa caliente y ruidosa en el menú, conviene revisarla."
            ]
        );

        return;
    }

    resultado(
        "El ruido puede necesitar una revisión",
        [
            "Comprueba si el ruido es constante.",
            "Comprueba si aparece un ruido mecánico o irregular.",
            "Prueba a reiniciar la consola.",
            "Si el ruido nuevo continúa incluso en el menú, conviene revisarla."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — FPS / TIRONES
========================================================= */

function diagnosticoFPSConsola() {

    pregunta(
        "¿Los tirones o pocos FPS ocurren en todos los juegos?",
        [
            "Sí, en todos",
            "Solo en algunos",
            "No estoy seguro"
        ],
        diagnosticoFPSConsolaPaso2,
        1,
        2
    );
}

function diagnosticoFPSConsolaPaso2(opcion) {

    if (opcion === "Sí, en todos") {

        pregunta(
            "¿La consola se calienta mucho mientras juegas?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoFPSConsolaResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Solo en algunos") {

        resultado(
            "El problema puede estar relacionado con esos juegos",
            [
                "Comprueba si el juego tiene actualizaciones.",
                "Revisa las opciones gráficas o el modo de rendimiento.",
                "Si existe modo rendimiento, pruébalo.",
                "Reinicia el juego.",
                "Comprueba si el problema aparece siempre en las mismas zonas del juego."
            ]
        );

        return;
    }

    resultado(
        "Conviene comparar el rendimiento entre varios juegos",
        [
            "Prueba otro juego para comprobar si ocurre lo mismo.",
            "Reinicia la consola.",
            "Comprueba si hay actualizaciones del sistema.",
            "Comprueba si la consola se calienta demasiado.",
            "Revisa si tienes suficiente espacio de almacenamiento."
        ]
    );
}

function diagnosticoFPSConsolaResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "El calor puede estar afectando al rendimiento",
            [
                "Coloca la consola en un espacio abierto.",
                "No bloquees las rejillas de ventilación.",
                "Evita colocarla dentro de un mueble cerrado.",
                "Comprueba externamente si las rejillas tienen polvo.",
                "Si se calienta excesivamente o muestra avisos de temperatura, deja que se enfríe."
            ]
        );

        return;
    }

    if (opcion === "No") {

        resultado(
            "Puede existir un límite de rendimiento o configuración",
            [
                "Comprueba si los juegos están actualizados.",
                "Revisa si existe un modo de rendimiento.",
                "Reinicia la consola.",
                "Comprueba que tengas suficiente espacio libre.",
                "Si ocurre en todos los juegos de forma persistente, conviene revisarla."
            ]
        );

        return;
    }

    resultado(
        "Conviene comprobar temperatura y rendimiento",
        [
            "Comprueba si la consola se calienta durante los juegos.",
            "Reinicia la consola.",
            "Comprueba las actualizaciones.",
            "Revisa el espacio libre.",
            "Prueba otro juego para comparar."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — NO ENCIENDE
========================================================= */

function diagnosticoNoEnciendeConsola() {

    pregunta(
        "¿Qué ocurre cuando intentas encender la consola?",
        [
            "No hace absolutamente nada",
            "Se enciende pero no aparece imagen",
            "Enciende y se apaga enseguida",
            "Hace un sonido o enciende una luz"
        ],
        diagnosticoNoEnciendeConsolaPaso2,
        1,
        2
    );
}

function diagnosticoNoEnciendeConsolaPaso2(opcion) {

    if (opcion === "No hace absolutamente nada") {

        pregunta(
            "¿La consola está recibiendo corriente?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoConsolaSinRespuesta,
            2,
            2
        );

        return;
    }

    if (opcion === "Se enciende pero no aparece imagen") {

        pregunta(
            "¿El televisor o monitor muestra algún mensaje?",
            [
                "Sí, muestra un mensaje",
                "No, la pantalla está negra",
                "No estoy seguro"
            ],
            diagnosticoConsolaSinImagen,
            2,
            2
        );

        return;
    }

    if (opcion === "Enciende y se apaga enseguida") {

        resultado(
            "Puede existir un problema de alimentación, temperatura o arranque",
            [
                "Desconecta la consola durante unos minutos y vuelve a probar.",
                "Comprueba el cable de alimentación.",
                "Asegúrate de que la consola tenga buena ventilación.",
                "No la utilices si muestra avisos de temperatura.",
                "Si sigue apagándose inmediatamente, conviene llevarla a revisión."
            ]
        );

        return;
    }

    resultado(
        "La consola está recibiendo alguna señal de encendido",
        [
            "Comprueba el cable HDMI.",
            "Comprueba que el televisor esté en la entrada correcta.",
            "Reinicia la consola.",
            "Desconecta accesorios USB innecesarios y vuelve a probar.",
            "Si sigue sin iniciar correctamente, conviene revisarla."
        ]
    );
}

function diagnosticoConsolaSinRespuesta(opcion) {

    if (opcion === "Sí") {

        resultado(
            "Puede existir un problema de encendido",
            [
                "Comprueba el cable de alimentación.",
                "Prueba otro enchufe.",
                "Desconecta la consola durante unos minutos y vuelve a probar.",
                "Desconecta accesorios externos innecesarios.",
                "Si continúa sin reaccionar, conviene llevarla a revisión."
            ]
        );

        return;
    }

    if (opcion === "No") {

        resultado(
            "Comprueba la alimentación de la consola",
            [
                "Comprueba el enchufe.",
                "Comprueba el cable de alimentación.",
                "Prueba otro enchufe si es posible.",
                "Si el problema continúa, conviene revisar la alimentación."
            ]
        );

        return;
    }

    resultado(
        "Primero hay que comprobar la alimentación",
        [
            "Comprueba el enchufe.",
            "Comprueba el cable de alimentación.",
            "Desconecta la consola durante unos minutos.",
            "Vuelve a conectarla y prueba de nuevo.",
            "Si no responde, conviene llevarla a revisión."
        ]
    );
}

function diagnosticoConsolaSinImagen(opcion) {

    if (opcion === "Sí, muestra un mensaje") {

        resultado(
            "Puede existir un problema de señal de vídeo",
            [
                "Comprueba el cable HDMI.",
                "Comprueba que el televisor esté en la entrada correcta.",
                "Prueba otro puerto HDMI si está disponible.",
                "Reinicia la consola.",
                "Si continúa sin imagen, conviene revisarla."
            ]
        );

        return;
    }

    resultado(
        "Puede existir un problema de señal entre la consola y la pantalla",
        [
            "Comprueba el cable HDMI.",
            "Comprueba la entrada seleccionada en el televisor.",
            "Prueba otro puerto HDMI.",
            "Reinicia la consola.",
            "Si continúa sin imagen, conviene llevarla a revisión."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — SE APAGA SOLA
========================================================= */

function diagnosticoApagadoConsola() {

    pregunta(
        "¿Cuándo se apaga sola la consola?",
        [
            "Mientras juego",
            "Después de jugar durante un rato",
            "Incluso estando en el menú",
            "Se apaga de forma aleatoria"
        ],
        diagnosticoApagadoConsolaPaso2,
        1,
        2
    );
}

function diagnosticoApagadoConsolaPaso2(opcion) {

    if (opcion === "Mientras juego") {

        pregunta(
            "¿La consola está muy caliente cuando se apaga?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoApagadoConsolaResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Después de jugar durante un rato") {

        pregunta(
            "¿Notas que la consola está muy caliente antes de apagarse?",
            [
                "Sí",
                "No",
                "No estoy seguro"
            ],
            diagnosticoApagadoConsolaResultado,
            2,
            2
        );

        return;
    }

    if (opcion === "Incluso estando en el menú") {

        resultado(
            "El apagado ocurre incluso con poca carga",
            [
                "Comprueba que la consola tenga buena ventilación.",
                "No tapes las rejillas.",
                "Evita colocarla dentro de un mueble cerrado.",
                "Comprueba externamente si las rejillas tienen polvo.",
                "Si sigue apagándose en el menú, conviene llevarla a revisión."
            ]
        );

        return;
    }

    resultado(
        "Un apagado aleatorio puede tener varias causas",
        [
            "Comprueba que el cable de alimentación esté bien conectado.",
            "Reinicia la consola.",
            "Comprueba que tenga buena ventilación.",
            "Comprueba si ocurre después de utilizarla durante mucho tiempo.",
            "Si continúa apagándose sin motivo aparente, conviene revisarla."
        ]
    );
}

function diagnosticoApagadoConsolaResultado(opcion) {

    if (opcion === "Sí") {

        resultado(
            "El calor puede estar provocando el apagado de protección",
            [
                "Deja que la consola se enfríe antes de volver a utilizarla.",
                "Colócala en un espacio abierto.",
                "No bloquees las rejillas de ventilación.",
                "Evita colocarla dentro de un mueble cerrado.",
                "Comprueba externamente si las rejillas tienen polvo.",
                "Si vuelve a apagarse por temperatura, conviene revisarla."
            ]
        );

        return;
    }

    if (opcion === "No") {

        resultado(
            "El apagado puede tener otra causa",
            [
                "Comprueba el cable de alimentación.",
                "Prueba otro enchufe si es posible.",
                "Comprueba que la consola tenga buena ventilación.",
                "Reinicia la consola.",
                "Si continúa apagándose, conviene llevarla a revisión."
            ]
        );

        return;
    }

    resultado(
        "Conviene comprobar temperatura y alimentación",
        [
            "Comprueba si la consola está caliente cuando se apaga.",
            "Comprueba el cable de alimentación.",
            "Asegúrate de que las rejillas estén libres.",
            "Evita espacios cerrados.",
            "Si continúa apagándose, conviene revisarla."
        ]
    );
}


/* =========================================================
   🎮 CONSOLA — MANDO NO SE CONECTA
========================================================= */

function diagnosticoMandoConsola() {

    pregunta(
        "¿Qué ocurre con el mando?",
        [
            "No enciende",
            "Enciende pero no conecta",
            "Se conecta y se desconecta",
            "No estoy seguro"
        ],
        diagnosticoMandoConsolaPaso2,
        1,
        2
    );
}

function diagnosticoMandoConsolaPaso2(opcion) {

    if (opcion === "No enciende") {

        resultado(
            "El mando puede no tener batería o carga suficiente",
            [
                "Conecta el mando a la consola con un cable compatible.",
                "Déjalo cargando durante un tiempo y vuelve a probar.",
                "Si utilizas pilas, comprueba que estén correctamente colocadas y tengan carga.",
                "Prueba otro cable compatible si el mando no responde.",
                "Si continúa sin encender, puede necesitar revisión."
            ]
        );

        return;
    }

    if (opcion === "Enciende pero no conecta") {

        resultado(
            "El mando puede necesitar volver a emparejarse",
            [
                "Acerca el mando a la consola.",
                "Activa el modo de sincronización del mando y de la consola según sus botones correspondientes.",
                "Si es posible, conecta el mando por cable y prueba de nuevo.",
                "Reinicia la consola.",
                "Desconecta accesorios USB innecesarios y vuelve a intentar la conexión."
            ]
        );

        return;
    }

    if (opcion === "Se conecta y se desconecta") {

        resultado(
            "Puede existir un problema de batería, conexión o interferencias",
            [
                "Comprueba que el mando tenga suficiente batería.",
                "Acércate a la consola.",
                "Reinicia la consola y vuelve a conectar el mando.",
                "Si utilizas conexión inalámbrica, prueba temporalmente con cable si es compatible.",
                "Si continúa desconectándose, conviene revisarlo."
            ]
        );

        return;
    }

    resultado(
        "Comprueba primero la alimentación y la conexión",
        [
            "Comprueba que el mando tenga batería.",
            "Reinicia la consola.",
            "Acerca el mando a la consola.",
            "Prueba a conectarlo mediante cable si es compatible.",
            "Si sigue sin conectarse, puede necesitar revisión."
        ]
    );
}


/* =========================
   CATEGORÍAS
========================= */

document.querySelectorAll(".category-card").forEach(boton => {

    boton.addEventListener("click", () => {

        const categoria = boton.dataset.category;

        mostrarProblemas(categoria);

    });

});


/* =========================
   BUSCADOR
========================= */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function buscarProblema() {

    const texto = searchInput.value.trim().toLowerCase();

    if (!texto) {
        return;
    }


    /* 📱 MÓVIL */

    if (
        texto.includes("móvil") &&
        (
            texto.includes("calienta") ||
            texto.includes("calor") ||
            texto.includes("temperatura")
        )
    ) {
        diagnosticoCalor();
        return;
    }


    if (
        texto.includes("batería") ||
        texto.includes("bateria")
    ) {
        diagnosticoBateria();
        return;
    }


    if (
        texto.includes("móvil") &&
        (
            texto.includes("lento") ||
            texto.includes("lag")
        )
    ) {
        diagnosticoMovilLento();
        return;
    }


    /* 💻 ORDENADOR */

    if (
        (
            texto.includes("ordenador") ||
            texto.includes("pc")
        ) &&
        (
            texto.includes("ruido") ||
            texto.includes("ruidoso") ||
            texto.includes("ruidosa")
        )
    ) {
        diagnosticoRuidoOrdenador();
        return;
    }


    if (
        (
            texto.includes("ordenador") ||
            texto.includes("pc")
        ) &&
        (
            texto.includes("no enciende") ||
            texto.includes("no prende") ||
            texto.includes("no arranca")
        )
    ) {
        diagnosticoOrdenadorNoEnciende();
        return;
    }


    if (
        (
            texto.includes("ordenador") ||
            texto.includes("pc")
        ) &&
        (
            texto.includes("calienta") ||
            texto.includes("calor") ||
            texto.includes("temperatura")
        )
    ) {
        diagnosticoCalorOrdenador();
        return;
    }


    if (
        (
            texto.includes("ordenador") ||
            texto.includes("pc")
        ) &&
        (
            texto.includes("lento") ||
            texto.includes("lag")
        )
    ) {
        diagnosticoOrdenadorLento();
        return;
    }


    if (
        (
            texto.includes("ordenador") ||
            texto.includes("pc")
        ) &&
        (
            texto.includes("fps") ||
            texto.includes("tirones")
        )
    ) {
        diagnosticoFPSOrdenador();
        return;
    }


    if (
        texto.includes("internet en ordenador") ||
        texto.includes("internet en pc") ||
        texto.includes("wifi en ordenador") ||
        texto.includes("wifi en pc") ||
        texto.includes("wifi ordenador") ||
        texto.includes("wifi pc") ||
        texto.includes("ethernet") ||
        texto.includes("internet pc") ||
        texto.includes("internet ordenador")
    ) {
        diagnosticoInternetOrdenador();
        return;
    }


    /* 🎮 CONSOLA */

    if (
        texto.includes("consola") &&
        (
            texto.includes("no enciende") ||
            texto.includes("no prende") ||
            texto.includes("no arranca")
        )
    ) {
        diagnosticoNoEnciendeConsola();
        return;
    }


    if (
        texto.includes("consola") &&
        (
            texto.includes("apaga") ||
            texto.includes("apagada") ||
            texto.includes("se apaga")
        )
    ) {
        diagnosticoApagadoConsola();
        return;
    }


    if (
        texto.includes("consola") &&
        (
            texto.includes("calienta") ||
            texto.includes("calor") ||
            texto.includes("temperatura")
        )
    ) {
        diagnosticoCalorConsola();
        return;
    }


    if (
        texto.includes("consola") &&
        (
            texto.includes("ruido") ||
            texto.includes("ruidosa") ||
            texto.includes("ruidoso")
        )
    ) {
        diagnosticoRuidoConsola();
        return;
    }


    if (
        texto.includes("consola") &&
        (
            texto.includes("fps") ||
            texto.includes("tirones") ||
            texto.includes("pocos fps")
        )
    ) {
        diagnosticoFPSConsola();
        return;
    }


    if (
        texto.includes("mando") &&
        (
            texto.includes("conecta") ||
            texto.includes("conectar") ||
            texto.includes("conexión") ||
            texto.includes("conexion")
        )
    ) {
        diagnosticoMandoConsola();
        return;
    }


    /* 📱 FPS GENÉRICOS */

    if (
        texto.includes("fps") ||
        texto.includes("tirones")
    ) {
        diagnosticoFPS();
        return;
    }


    mostrarProximamente(searchInput.value);
}


searchButton.addEventListener("click", buscarProblema);


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        buscarProblema();
    }

});
