
export class Pregunta {

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

export class Juego {
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
      this.puntaje+=100
    }
    this.preguntaActual++
  }


  aFinalizado() {
      return this.preguntas.length === this.preguntaActual;
  }
}

export class Funcionalidad {

  constructor(){}

  /**
   *
   * @param {string} texto pregunta a mostrar al usuario
   */
  mostrarPregunta(texto) {
      const preguntaTitulo = document.getElementById('pregunta')
      preguntaTitulo.innerText = texto
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


  mostrarProgreso(preguntaActual){
    const element = document.getElementById('progress')
    element.innerHTML = `Pregunta ${preguntaActual} de 5`
  }




  /**
   *
   * @param {number} puntaje puntaje total
   */
  mostrarPuntuacion(puntaje) {
	    let namePoint = localStorage.getItem("nombre")
      const interfazFinal = `<h2 class="nameText">Hey \n ${namePoint}!</h2><h2 class="finalText">Tu puntuacion es de: ${puntaje} / 500 </h2>`
      const elemento = document.querySelector('.eleccion')
      elemento.innerHTML = interfazFinal

      document.querySelector('#buttons').classList.remove("gosth")

  }

}