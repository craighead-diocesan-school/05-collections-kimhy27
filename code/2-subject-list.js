// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Maths',
  'Music'
]

function showSubjects() {
  alert(subjects)
}
 
function addSubject() {

  let newSubject = prompt('What new subject would you like to add?')

  // add a new item to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = prompt ('What subjects would you like to delete?')

  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
  let arrayLength = arrayName.length
}
