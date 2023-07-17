// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  100000,
  15092000,
  25032018,
  1234567890
]

function searchNumbers() {
  let searchTarget = 1
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }

  alert(searchTarget + ' found: ' + searchResult)
}
