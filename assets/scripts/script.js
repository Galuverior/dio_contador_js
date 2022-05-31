// Total count
const totalCount = document.getElementById('currentNumber')

// Add/Subtract Buttons
const subtractNumber = document.getElementById('subtract')
const addNumber = document.getElementById('add')

const text = document.querySelector('.text')
const text2 = document.querySelector('.text2')

// Variable to track count
var currentNumber = 0

// Display initial value
totalCount.innerHTML = currentNumber

// Add click event and function to buttons
subtractNumber.addEventListener('click', function () {
  currentNumber--
  switch (true) {
    case currentNumber == -5:
      totalCount.innerHTML = currentNumber
      text2.classList.add('show')
      subtractNumber.disabled = true
      break
    case currentNumber < 0:
      totalCount.style.color = 'red'
      break
    case currentNumber < 5:
      addNumber.disabled = false
      totalCount.innerHTML = currentNumber
      text.classList.remove('show')
      break
  }
  totalCount.innerHTML = currentNumber
})

addNumber.addEventListener('click', function () {
  currentNumber++
  switch (true) {
    case currentNumber == 5:
      text.classList.add('show')
      addNumber.disabled = true
      totalCount.innerHTML = currentNumber
      break
    case currentNumber >= 0:
      totalCount.style.color = 'black'
      break
    case currentNumber > -5:
      totalCount.innerHTML = currentNumber
      text2.classList.remove('show')
      subtractNumber.disabled = false
      break
  }
  totalCount.innerHTML = currentNumber
})
