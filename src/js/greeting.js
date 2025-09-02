/**
 *
 */
class Greeting {
  /**
   * Sets the name that the user typed in to the form.
   *
   * @param {string} input - The name the user gave.
   * @returns
   */
  setName (input) {
    const name = input.value
    return this.showGreeting(name)
  }

  /**
   * Writes the greeting to the user.
   *
   * @param name
   * @returns
   */
  showGreeting (name) {
    // Just printing the name to start with.
    console.log(name)
    return `Hello ${name}`
  }

  /**
   * Translates a string into robber language.
   *
   * @param {string} name - The set name.
   */
  convertToRobberLanguage (name) {
    const vowels = 'aeiouåäö'
    // Stores the Robber Language name through the loop
    const RLname = []

    for (i in name) {
      if (i.includes.vowel) {
        RLname.add(i)
      } else {
        RLname.add(i + 'o' + i)
      }
    }
  }
}

export default Greeting
