const emplyees = ['John'];
const moreEmplyees = ['Victor', 'Anne', 'Peter', 'Sarah', 'Emily', 'Jeff', 'Henry', 'Kane', 'Mark', 'John'];
const allEmployees = new Array(100).fill('John');

function findEmployee(array) {
  const time1 = performance.now();
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'John') {
      console.log('Found John!')
    }
  }
  
  const time2 = performance.now();  
  console.log('findEmployee function takes ' + (time2-time1) + ' milliseconds.')
}

// Exporting variables and functions
export { emplyees, moreEmplyees, allEmployees, findEmployee };