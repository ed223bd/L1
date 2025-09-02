import Greeting from './greeting.js'

// Collects the name from HTML form
const input = document.querySelector('#nameInput')

// New instance of Greeting class
const greeting = new Greeting()

// Listens for click on "OK"-button in HTML form
const button = document.querySelector('#nameButton')
button.addEventListener('click', (event) => {
  console.log('Button clicked!')
  const message = greeting.setName(input)
  const output = document.querySelector('.greetingBox')
  output.textContent = message
})
