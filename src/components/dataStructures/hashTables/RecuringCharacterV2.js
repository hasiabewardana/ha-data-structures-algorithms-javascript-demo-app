//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
// let input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
// let input = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an array = [2,3,4,5]:
// let input = [2,3,4,5];
//It should return undefined

// Solution 1 with for loops
// O(n^2)
function firstRecurringCharacterV1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[j];
      }
    }
  }
  return undefined;
}

// Solution 2 with maps
// O(n)
function firstRecurringCharacterV2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = input[i];
    }
  }
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
let input = [2, 5, 5, 2, 3, 5, 1, 2, 4];
// return 5 because the pairs are before 2,2

// Function call
// console.log(firstRecurringCharacterV1(input));
console.log(firstRecurringCharacterV2(input));
