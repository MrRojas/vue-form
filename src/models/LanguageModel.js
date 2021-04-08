/*!
  Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
  https://github.com/ditdot-dev/vue-flow-form
  https://www.ditdot.hr/en
*/

// Language data store

export default class LanguageModel {
  constructor(options) {
    this.enterKey = 'Enter'
    this.shiftKey = 'Shift'
    this.ok = 'OK'
    this.continue = 'Continuar'
    this.skip = 'Saltar'
    this.pressEnter = 'Presiona :enterKey'
    this.multipleChoiceHelpText = 'Elige tantos como quieras'
    this.multipleChoiceHelpTextSingle = 'Elige solo una respuesta'
    this.otherPrompt = 'Otro'
    this.placeholder = 'Escriba su respuesta aquí ...'
    this.submitText = 'Enviar'
    this.longTextHelpText = ':shiftKey + :enterKey para hacer un salto de línea.'
    this.prev = 'Anterior'
    this.next = 'Siguiente'
    this.percentCompleted = ':percent% completado'
    this.invalidPrompt = 'Please fill out the field correctly'
    this.thankYouText = 'Thank you!'
    this.successText = 'Your submission has been sent.'
    this.ariaOk = 'Press to continue'
    this.ariaRequired = 'This step is required'
    this.ariaPrev = 'Previous step'
    this.ariaNext = 'Next step'
    this.ariaSubmitText = 'Press to submit'
    this.ariaMultipleChoice = 'Press :letter to select'
    this.ariaTypeAnswer = 'Type your answer here'

    Object.assign(this, options || {})
  }

  /**
   * Inserts a new CSS class into the language model string to format the :string
   * Use it in a component's v-html directive: v-html="language.formatString(language.languageString)"
   */
  formatString(string) {
    return string.replace(/:(\w+)/g, (match, word) => {
      if (this[word]) {
        return '<span class="f-string-em">' + this[word] + '</span>'
      }
      
      return match
    })
  }
}


