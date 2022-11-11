

//primero dividi los temas que queria tener idsponibles en arreglos deobjetos para que fuese mas facil para el usuario decidir un tema
//cada objeto representa una pregunta del tema, tiene 3 propiedades principales que nor serviran como cuerpo de nuestro objeto

const css = [
    {
        pregunta: '¿cual de las siguientes opciones no sirve para estilizar una web?',
        opciones: [
            'css',
            'sass',
            'stylus',
            'c'
        ],
        respuesta: 'c'
    },
    {
        pregunta: '¿Que significa las siglas "CSS" ?',
        opciones: [
            'hoja de estilo en cascada',
            'cascading style sheets',
            'ambas respuestas son correctas'
        ],
        respuesta: 'ambas respuestas son correctas'
    },
    {
        pregunta: '¿Cuantos tipos de css hay?',
        opciones: [
            '2',
            '10',
            '5',
            '7'
        ],
        respuesta: '5'
    },
    {
        pregunta: '¿Que es un framework de css?',
        opciones: [
            'un lenguaje de programacion',
            'una biblioteca de estilos prefabricados',
            'un lenguaje de hojas en cascada',
            'un editor de textos'
        ],
        respuesta: 'una biblioteca de estilos prefabricados'
    },
    {
        pregunta: '¿Que propiedad no representa un color?',
        opciones: [
            '#232323',
            'rgb()',
            'url()',
            'white'
        ],
        respuesta: 'url()'
    }
]

const html = [
{
    pregunta: '¿Cuáles son las capas en las que puede dividirse una página Web?',
    opciones: [
        'capa de contenido',
        'capa de presentacion',
        'capa de comportamiento',
        'todas las anteriores'
    ],
    respuesta: 'todas las anteriores'
},
{
    pregunta: '¿que significa HTML?',
    opciones: [
        'marcado de textos',
        'marcado de texto en cascada',
        'hyper text markup language',
        'language hyper markup text'
    ],
    respuesta: 'hyper text markup language'
},
{
    pregunta: '¿Que etiqueta esta mal definida?',
    opciones: [
        '<div></div>',
        '<img></img>',
        '<h2></h2>',
        '<link>'
    ],
    respuesta: '<img></img>'
},
{
    pregunta: '¿que etiqueta permite conectar varios archivos html?',
    opciones: [
        '<section></section>',
        '<footer></footer>',
        '<link>',
        '<script></script>'
    ],
    respuesta: '<link>'
},
{
    pregunta: '¿que define la etiqueta <title></title>?',
    opciones: [
        'el subtitulo de mi pagina',
        'el titulo de la pagina',
        'el titulo del documento',
        'el titulo del footer'
    ],
    respuesta: 'el titulo del documento'
}
]

const arte = [
{
    pregunta: '¿Quién pintó "La Gioconda"?',
    opciones: [
        'Tizano',
        'Leonardo da Vinci',
        'Miguel Angel',
        'Pablo Picasso'
    ],
    respuesta: 'Leonardo Davinci'
},
{
    pregunta: '¿Quién de ellos NO fue un muralista mexicano?',
    opciones: [
        'Pedro Lira',
        'Diego Rivera',
        'David Alfaro Siqueiros',
        'Jose Clemenete Orozco'
    ],
    respuesta: 'Pedro Lira'
},
{
    pregunta: '¿Quien fue el autor de la obra de arte "La ultima cena"?',
    opciones: [
        'Pablo Picasso',
        'Salvador Dali',
        'Leonardo da Vinci',
        'Diego Velazquez'
    ],
    respuesta: 'Leonardo da Vinci'
},
{
    pregunta: 'La obra de arte con nombre "Guernica" es de:',
    opciones: [
        'Pablo Picasso',
        'Henri Matisse',
        'M. C. Escher',
        'Diego Rivera'
    ],
    respuesta: 'Pablo Picasso'
},
{
    pregunta: '¿Quién de ellas no fue una pintora famosa?',
    opciones: [
        'Leonora Carrington',
        'Frida Kahlo',
        'Remedios Varo',
        'Virginia Woolf'
    ],
    respuesta: 'Virginia Woolf'
}
]
const ciencia = [
{
    pregunta: '¿Cual es el simbolo del calcio?',
    opciones: [
        'SG',
        'AT',
        'CM',
        'CA'
    ],
    respuesta: 'CA'
},
{
    pregunta: '¿Cual es el unico pajaro capaz de volar hacia atras?',
    opciones: [
        'Golondrina',
        'Cuervo',
        'Pelicano',
        'Colibri'
    ],
    respuesta: 'Colibri'
},
{
    pregunta: '¿Que inventaron los hermanos Wright rn 1903?',
    opciones: [
        'Motocicleta',
        'Bombilla',
        'Radio',
        'Aeroplano'
    ],
    respuesta: 'Aeroplano'
},
{
    pregunta: '¿Cual es el simbolo del calcio?',
    opciones: [
        'HG',
        'SR',
        'CA',
        'O'
    ],
    respuesta: 'CA'
},
{
    pregunta: '¿Cual es el hueso mas pequeño del cuerpo humano?',
    opciones: [
        'Martillo',
        'Parietal',
        'Yunque',
        'Estribio'
    ],
    respuesta: 'Estribio'
}
]
const historia = [
{
    pregunta: '¿Que estudia la paleontologia?',
    opciones: [
        'Especies de animales',
        'Plantas',
        'Vida en el oceano',
        'Vida prehistorica'
    ],
    respuesta: 'Vida prehistorica'
},
{
    pregunta: '¿Como se les llamaba a los lideres del Antiguo Egipto?',
    opciones: [
        'Emperador',
        'Gobernador',
        'Faraon',
        'Rey'
    ],
    respuesta: 'Faraon'
},
{
    pregunta: '¿Como se llamaba anteriormente la ciudad de Irán?',
    opciones: [
        'Roma',
        'Siria',
        'Esparta',
        'Persia'
    ],
    respuesta: 'Persia'
},
{
    pregunta: '¿Donde se invento la bicicleta?',
    opciones: [
        'Usa',
        'China',
        'Alemania',
        'Francia'
    ],
    respuesta: 'Alemania'
},
{
    pregunta: '¿Cual fue el primer metal empleado por el hombre?',
    opciones: [
        'Bronce',
        'Cobre',
        'Oro',
        'Hierro'
    ],
    respuesta: 'Cobre'
}
]
const geografia = [
{
    pregunta: '¿Cual es el oceano mas grande?',
    opciones: [
        'Indico',
        'Pacifico',
        'Atlantico',
        'Antartico'
    ],
    respuesta: 'Pacifico'
},
{
    pregunta: '¿Cual es la capital de estados unidos?',
    opciones: [
        'Berna',
        'Acra',
        'Pionyang',
        'Washington Dc'
    ],
    respuesta: 'Washington Dc'
},
{
    pregunta: '¿Cual es el denominado planeta rojo?',
    opciones: [
        'Saturno',
        'Jupiter',
        'Urano',
        'Marte'
    ],
    respuesta: 'Marte'
},
{
    pregunta: '¿Cual es el pais mas grande del mundo?',
    opciones: [
        'Mexico',
        'Argentina',
        'Rusia',
        'Estados Unidos'
    ],
    respuesta: 'Rusia'
},
{
    pregunta: '¿Cual es la capital de estados Mexíco?',
    opciones: [
        'Jerusalen',
        'Nairobi',
        'Ciudad de Mexíco',
        'Abuya'
    ],
    respuesta: 'Ciudad de Mexíco'
}
]
const deporte = [
{
    pregunta: '¿Que delantero es el mayor anotador de la hiatoria del f.c.barcelona?',
    opciones: [
        'Messi',
        'Luis Suarez',
        'Samuel Eto',
        'Rivaldo'
    ],
    respuesta: 'Messi'
},
{
    pregunta: '¿    Quien es el mejor jugador de baloncesto actualmente?',
    opciones: [
        'Damian Lillard',
        'James Harden',
        'Nikola Jokic',
        'Devin Booker'
    ],
    respuesta: 'Nikola Jokic'
},
{
    pregunta: '¿Que seleccion de futbol ha ganado mas mundiales?',
    opciones: [
        'Barcelona',
        'Manchester',
        'Brasil',
        'Holanda'
    ],
    respuesta: 'Brasil'
},
{
    pregunta: '¿Quien posee el recird mundial de 100 metros planos?',
    opciones: [
        'Carmelita Jeter',
        'Marion Jones',
        'Usain Bolt',
        'Merlene Ottey'
    ],
    respuesta: 'Usain Bolt'
},
{
    pregunta: '¿Cual es el deporte mas popular en el mundo?',
    opciones: [
        'Golf',
        'Tenis',
        'Futbol',
        'Atletismo'
    ],
    respuesta: 'Futbol'
}
]


//Creamos una clase que va a estructurar cuando llamemos una pregunta, dicha clase tendra un constructor que va a resivir por parametros las propiedades del objeto(pregunta)
//tambien esta clase tendra un metodo llamado respuestaCorrecta que resivira por parametro la propiedad opcion que es una posible respuesta y retorna si la opcion elegida es igual a la respuesta



class Pregunta {

    /**
     *
     * @param {string} texto este es el texto de la pregunta
     * @param {string[]} opciones estas son las opciones de la pregunta
     * @param {string} respuesta esta es la respuesta de la pregunta
     */
    constructor(texto, opciones, respuesta) {
        this.pregunta = texto;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} opcion algun texto para adivinar
     * @returns {boolean} retorna true si la respuesta es correcta
     */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta
    }
}


//declaramos otra clase que se encargara de mostrar las preguntas del arreglo(tema) elegido
//al llamar esta clase declaramos dos variables que guardaran el puntaje y la posicion de la pregunta donde se encuentra que servira para verificar que la pregunta ha sido contestada y poder pasar a la siguiente
//el constructor de esta clase resivira por parametro la propiedad preguntas del tema y la comparara
//el metodo numeroDePregunta no resive nada por parametro por que retornara la posicion actual de las preguntas del tema
//el metodo adivina resive el parametro respuesta y condiciona si el metodo respuestaCorrecta es igual al parametro respuesta si es asi la variable puntaje aumenta 1
//el metodo aFinalizado solo retorna si la longitud de la propiedad preguntas es igual a la variable preguntaActual
class Juego {
    preguntaActual = 0
    puntaje = 0

    /**
     *
     * @param {Pregunta} preguntas
     */
    constructor(preguntas) {
        this.preguntas = preguntas
    }

    /**
     *
     * @returns {Pregunta} retorna la pregunta encontrada
     */
    numeroDePregunta()  {
        return this.preguntas[this.preguntaActual];
    }


    /**
     *
     * @param {string} respuesta texto de la respuesta elegida
     */
    adivina(respuesta) {
        if (this.numeroDePregunta().respuestaCorrecta(respuesta)) {
            this.puntaje++
        }
            this.preguntaActual++
    }


    aFinalizado() {
        return this.preguntas.length === this.preguntaActual;
    }
}


//creamos esta clase para estructurar la interaccion del usuario en el juego
//su constructor esta vacio por que solo necesitaremos los metodos
//el metodo mostrarPregunta nos permite resivir la pregunta a mostrar al usuario y guardarla en una variable cuya funcion sera pintar la pregunta en un h2 con un id
//el metodo mostrarOpciones nos permite crear un boton dependiendo el numero de respuestas que tenga nuestra pregunta y agregar este boton a un contenedor previamente creado en html con un id, el parametro o funcion callback nos sirve para pasar el texto actual que tenga la posible respuesta al boton
//el metodo mostrar puntuacion resive por parametro la variable puntaje y ejecuta una variable donde pinta un h2 y concatena el valor de la variable puntaje, luego crea otra variable que guarda todo el juego para despues pintar solo la puntuacion en el index con la propiedad innerHTML
class Funcionalidad {

    constructor(){}

    /**
     *
     * @param {string} texto pregunta a mostrar al usuario
     */
    mostrarPregunta(texto) {
        const preguntaTitulo = document.getElementById('pregunta')
        preguntaTitulo.innerText = texto;
    }

    /**
     *
     * @param {string[]} opciones la opcion de la pregunta
     */
    mostrarOpciones(opciones, callback) {
        const opcionesContenedor = document.getElementById('opciones')
        opcionesContenedor.innerHTML = ''

        for (let i = 0; i < opciones.length; i++) {
            const button = document.createElement('button')
            button.innerText = opciones[i];
            button.addEventListener('click', () => callback(opciones[i]));

            opcionesContenedor.append(button);
        }
    }

    /**
     * 
     * @param {number} puntaje puntaje total
     */
    mostrarPuntuacion(puntaje) {
        const interfazFinal = `<h2>Resultado</h2> <h2>Tu puntuacion es de: ${puntaje} </h2>`

        const elemento = document.getElementById('juego')
        elemento.innerHTML = interfazFinal;
    }
}

//logica


//para la logica hize una variable que guarda el valor adquirido por un prompt y muestra los temas disponibles que el usuario puede escoger

alert('listo')
var preguntas
function htmlCuestions() {
    preguntas = html.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const htmlTema = document.getElementById('htmlTema')
htmlTema.addEventListener('click', htmlCuestions)

function cssCuestions() {
    preguntas = css.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const cssTema = document.getElementById('cssTema')
cssTema.onclick=cssCuestions

function arteCuestions() {
    preguntas = arte.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const arteTema = document.getElementById('arteTema')
arteTema.onclick=arteCuestions

function cienciaCuestions() {
    preguntas = ciencia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const cienciaTema = document.getElementById('cienciaTema')
cienciaTema.onclick=cienciaCuestions

function historiaCuestions() {
    preguntas = historia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const historiaTema = document.getElementById('historiaTema')
historiaTema.onclick=historiaCuestions

function geografiaCuestions() {
    preguntas = geografia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const geografiaTema = document.getElementById('geografiaTema')
geografiaTema.onclick=geografiaCuestions

function deporteCuestions() {
    preguntas = deporte.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    principal()
}
const deporteTema = document.getElementById('deporteTema')
deporteTema.onclick=deporteCuestions

//ya con la variable preguntas definida por el tema escogido por el usuario, el objeto pregunta ha sido rellenado con los parametros del arreglo escogido por el usuario
//creamos la funcion principal que se encargara de crear una partida con el tema escogido, esta funcion ejecuta una constante que a su vez crea una clase nueva juego con su parametro preguntas antes declarado
//despues ejecuta otra constante que a su vez crea una clase funcionalidad
//luego la funcion renderiza la pagina y muestra solo la puntuacion, esto con la constante renderizarPagina que tiene como funcion condicionar si juego a finalizado con su metodo aFinalizado y ejecuta la puntuacion de dicho juego, si no utiliza el metodo de mostrar pregunta y opciones de la clase funcionalidad para crear una funcion nueva que ejecute la clase juego con su metodo adivina que verificara la respuesta y posterior a esta renderizar en pantalla el resultado.


/**
 *
 * @param {Juego} juego objeto principal del juego
 * @param {Funcionalidad} funcionalidad objeto de funcionalidad
 */
const renderizarPagina = (juego, funcionalidad) => {

    if(juego.aFinalizado()) {
        funcionalidad.mostrarPuntuacion(juego.puntaje);
    }else {
        funcionalidad.mostrarPregunta(juego.numeroDePregunta().pregunta);
        funcionalidad.mostrarOpciones(juego.numeroDePregunta().opciones, (opcionActual) => {
            juego.adivina(opcionActual);
            renderizarPagina(juego, funcionalidad);
        });
    }
};

function principal() {
    const juego = new Juego(preguntas)
    const funcionalidad = new Funcionalidad()

    renderizarPagina(juego, funcionalidad)
}
