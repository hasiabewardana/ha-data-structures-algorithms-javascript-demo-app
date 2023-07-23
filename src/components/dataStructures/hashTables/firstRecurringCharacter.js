class RecuringCharacter {
  // Constructor
  constructor(size) {
    this.data = new Array(size);
  }

  firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      this.set(input[i], input[i]);
    }
  }

  // Here we use hash tables to find first recurring element.
  // Hash function
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % input.length;
    }

    return hash;
  }

  // Method to set values
  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(key, value);
    } else {
      if (this.data[address][1] === value) {
        console.log(value);
      }else{
        console.log(undefined);
      }
    }
  }
}

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
let input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2
const recuringCharacter = new RecuringCharacter(input.length);
recuringCharacter.firstRecurringCharacter(input);

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
