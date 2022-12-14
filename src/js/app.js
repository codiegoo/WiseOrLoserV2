import { tecnologia } from "./data.js";
import { arte } from "./data.js";
import { ciencia } from "./data.js";
import { historia } from "./data.js";
import { geografia } from "./data.js";
import { deporte } from "./data.js";
import { Pregunta } from "./clases.js";
import { Juego } from "./clases.js";
import { Funcionalidad } from "./clases.js";





function jugar(){
    let name = document.querySelector('#inputName').value
    localStorage.setItem("nombre", name)

    if(name === ''){

    }else{
        document.querySelector('#userLogin').classList.add("gosth")
        recommend()
        return(name)
    }

}


let btnJugar = document.querySelector('#startGame')
function recommend() {
    return new Promise((resolve, reject) => {
        const nameValidate = localStorage.getItem("nombre")
        if (nameValidate === ''){
            reject(new Error('error'))
        }else{
            setTimeout(()=> {
                resolve(Swal.fire({
                    title: 'hey ' + nameValidate + '!',
                    text: 'Suerte, puedes reiniciar el juego con el boton reiniciar partida y recuerda el boton DarkMode arriba a la izquierda!!',
                    confirmButtonText: '👍'
                }))
            }, 1000)
        }
    })
}

btnJugar.addEventListener('click', jugar)



let preguntas
function tecnoCuestions() {
    preguntas = tecnologia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
    principal()
}
const tecnoTema = document.getElementById('tecnoTema')
tecnoTema.onclick=tecnoCuestions


function arteCuestions() {
    preguntas = arte.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
    principal()
}
const arteTema = document.getElementById('arteTema')
arteTema.onclick=arteCuestions

function cienciaCuestions() {
    preguntas = ciencia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
    principal()
}
const cienciaTema = document.getElementById('cienciaTema')
cienciaTema.onclick=cienciaCuestions

function historiaCuestions() {
    preguntas = historia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
    principal()
}
const historiaTema = document.getElementById('historiaTema')
historiaTema.onclick=historiaCuestions

function geografiaCuestions() {
    preguntas = geografia.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
    principal()
}
const geografiaTema = document.getElementById('geografiaTema')
geografiaTema.onclick=geografiaCuestions

function deporteCuestions() {
    preguntas = deporte.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
    document.querySelector('#opcionesTemas').classList.add("gosth")
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
        funcionalidad.mostrarProgreso(juego.preguntaActual+1)
    }
};

function principal() {
    const juego = new Juego(preguntas)
    const funcionalidad = new Funcionalidad()

    renderizarPagina(juego, funcionalidad)

}



// darkMode Function
function chanModeColor() {
    const body = document.body
    body.classList.toggle('darkMode')
}
const darkModeBtn = document.querySelector('#darkModeBtn')
darkModeBtn.addEventListener('click', chanModeColor)



// ReloadGame Function
const btnReload = document.querySelector('#btnRecargar')
btnReload.addEventListener('click', () => {
    location.reload()
})
