/**
 *
 */
class Greeting {
  /**
   *
   */
  setName(input) {
    const name = input.value
    this.convertToGreeting(name)
  }

  /**
   *
   */
  convertToGreeting(name) {
    // Just printing the name to start with.
    console.log(name)
  }
}

export default Greeting
