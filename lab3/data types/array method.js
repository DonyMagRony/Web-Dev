function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }




  function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); 
  
  alert( arr ); 



  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  let arr1 = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); 
  alert( arr ); 




  function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr2 = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  alert( sorted );
  alert( arr );



  function Calculator() {   
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let a = { name: "a", surname: "S", id: 1 };
let b = { name: "b", surname: "K", id: 2 };
let c = { name: "c", surname: "L", id: 3 };

let users = [ a,b,c,];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName ); 




function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let a1 = { name: "a", age: 20 };
let b1 = { name: "b", age: 32 };
let c1 = { name: "c", age: 21 };
let arr3 = [ pete, john, mary ];
sortByAge(arr);
alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name);


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let arr4 = [1, 2, 3];
  shuffle(arr);
  alert(arr);


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
let a2= { name: "a", age: 25 };
let b2 = { name: "b", age: 30 };
let c2 = { name: "c", age: 29 };
let arr5 = [ john, pete, mary ];
alert( getAverageAge(arr) );



function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );



function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}




