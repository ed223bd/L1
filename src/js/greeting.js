/**
 * Class that takes a name and turns it into a robber language name.
 * User is presented with a message containing the robber language name.
 */
class Greeting {
  /**
   * Sets the name that the user typed in to the form.
   *
   * @param {string} input - The name the user gave.
   * @returns {string} The message in robber language.
   */
  setName (input) {
    const name = input.value
    return this.showGreeting(name)
  }

  /**
   * Writes the greeting to the user.
   *
   * @param {string} name - The set name.
   * @returns {string} The complete message, using the robber language name.
   */
  showGreeting (name) {
    // Just printing the name to start with.
    console.log(name)
    // return `Hello ${name}`
    const robberName = this.convertToRobberLanguage(name)
    return `Hello! ${robberName}`
  }

  /**
   * Translates a string into robber language.
   *
   * @param {string} name - The set name.
   * @returns {string} The converted robber language name.
   */
  convertToRobberLanguage (name) {
    console.log('convert called')
    const isConsonants = 'bcdfghjklmnpqrstvwxz'
    const isConsonantsCapital = 'BCDFGHJKLMNPQRSTVWXZ'
    let newName = ''

    name.split('').forEach(char => {
      if (isConsonants.includes(char)) {
        newName += (char + 'o' + char)
      } else if (isConsonantsCapital.includes(char)) {
        const smallChar = char.toLowerCase()
        newName += (char + 'o' + smallChar)
      } else {
        newName += (char)
      }
    })
    return newName
  }
}

export default Greeting
