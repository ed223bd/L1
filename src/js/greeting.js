/**
 *
 */
class Greeting {
  /**
   *
   */
  setName (input) {
    const name = input.value
    return this.showGreeting(name)
  }

  /**
   *
   */
  showGreeting (name) {
    // Just printing the name to start with.
    console.log(name)
    return `Hello ${name}`
  }

  /**
   *
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
