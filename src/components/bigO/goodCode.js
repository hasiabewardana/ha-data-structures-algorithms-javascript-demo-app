const emplyees = ['John'];

function findEmployee(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'John') {
      console.log('Found John!')
    }
  }
}

// Exporting variables and functions
export { emplyees, findEmployee };