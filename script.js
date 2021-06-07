/* Sets up variables named 'aInput' 'bInput' 'hInput' and 'area' and assigns the number 0 to each of them */
let aInput = 0
let bInput = 0
let hInput = 0
let area = 0
/* Sets up a command that listens for a button click on the button with the id 'area-calculate' which then activates the function named 'calculate' */
document.getElementById('area-calculate').addEventListener('click', calculate)
/* Once the function is activated, it will assign whatever value/number was typed into the input boxes to the variables and turn them into integers to work with. Then, it will take the assigned values of those variables and run through the area of a trapezoid formula and assign the result to the 'area' variable. It'll disable the input boxes so nothing can be changed into them anymore, and it'll display the final result in a new box with the id 'result-section' with the calculation and numbers used. Lastly, the function will change the previous calculate button to a new button with the id 'recalculate' in order to allow the user to make another calculation */
function calculate () {
  aInput = document.getElementById('a-input').value
  aInput = parseInt(aInput)
  bInput = document.getElementById('b-input').value
  bInput = parseInt(bInput)
  hInput = document.getElementById('h-input').value
  hInput = parseInt(hInput)
  area = (aInput + bInput) / 2 * hInput
  document.getElementById('a-input').disabled = true
  document.getElementById('b-input').disabled = true
  document.getElementById('h-input').disabled = true
  document.getElementById('area-calculate').style.display = 'none'
  document.getElementById('recalculate').style.display = 'block'
  document.getElementById('result-section').style.display = 'block'
  document.getElementById('a-result').innerHTML = aInput
  document.getElementById('b-result').innerHTML = bInput
  document.getElementById('h-result').innerHTML = hInput
  document.getElementById('area-result').innerHTML = area
}
/* Sets up a command that listens for a button click from the button with the id 'recalculate' and then activated the function called 'newCalculation' */
document.getElementById('recalculate').addEventListener('click', newCalculation)
/* Once the function is activated, it'll clear whatever numbers were in the input boxes and re-enable them so the user can write new numbers into them. The 'recalculate' button will disappear and the previous button 'calculate' will reappear. Lastly, the box that displays the result will be hidden until the user clicks the 'calculate' button again to display the result */
function newCalculation () {
  onclick = document.getElementById('a-input').value = ''
  onclick = document.getElementById('b-input').value = ''
  onclick = document.getElementById('h-input').value = ''
  document.getElementById('area-calculate').style.display = 'block'
  document.getElementById('recalculate').style.display = 'none'
  document.getElementById('result-section').style.display = 'none'
  document.getElementById('a-input').disabled = false
  document.getElementById('b-input').disabled = false
  document.getElementById('h-input').disabled = false
}
