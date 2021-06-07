let aInput = 0
let bInput = 0
let hInput = 0
let area = 0

document.getElementById('area-calculate').addEventListener('click', calculate)

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

document.getElementById('recalculate').addEventListener('click', newCalculation)

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
