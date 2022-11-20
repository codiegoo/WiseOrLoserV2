import { namePoint } from "./app.js";
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
          this.puntaje++
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
  /**
   *
   * @param {number} puntaje puntaje total
   */
  mostrarPuntuacion(puntaje) {
      const interfazFinal = `<h2>Hey!</h2>${namePoint}<h2>Tu puntuacion es de: ${puntaje} </h2>`

      const elemento = document.querySelector('.eleccion')
      elemento.innerHTML = interfazFinal
      elemento.innerHTML = btnNewGame
  }
}