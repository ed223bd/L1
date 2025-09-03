/**
 * Class that takes a name and turns it into a robber language name.
 * User is presented with a message containing the robber language name.
 */
class Greeting {
  /**
   * Sets the name that the user typed in to the form.
   *
   * @param {string} name - The name the user gave.
   * @returns {string} The message in robber language.
   */
  setName (name) {
    return this.showGreeting(name)
  }

  /**
   * Writes the greeting to the user.
   *
   * @param {string} name - The set name.
   * @returns {string} The complete message, using the robber language name.
   */
  showGreeting (name) {
    const robberName = this.convertToRobberLanguage(name)
    return `Hey! Get out of here ${robberName}. This is my site!`
  }

  /**
   * Translates a string into robber language.
   *
   * @param {string} name - The set name.
   * @returns {string} The converted robber language name.
   */
  convertToRobberLanguage (name) {
    const isConsonants = 'bcdfghjklmnpqrstvwxz'
    const isConsonantsCapital = 'BCDFGHJKLMNPQRSTVWXZ'
    let newName = ''

    name.split('').forEach(char => {
      if (isConsonants.includes(char)) {
        newName += (char + 'o' + char)
      } else if (isConsonantsCapital.includes(char)) {
        // If there is an uppercase letter, only the first should be uppercase.
        // The next one should be lowercase.
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
