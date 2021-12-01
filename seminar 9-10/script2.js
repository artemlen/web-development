//1 задание
console.log('1 Задание');
let n = 1;
let str = '';
while (n < 8) {
    str = str + '#';
    console.log(str);
    n++;
}
// 2 задание
console.log('2 Задание');
let t = 1;
while (t < 101) {
    if (t%3 == 0 && t%5 == 0) {
        console.log('FizzBuzz');
        t++;
    } else if (t%5 == 0 && t%3 != 0) {
        console.log('Buzz');
        t++;
    } else if (t%3 == 0 && t%5 != 0) {
        console.log('Fizz');
        t++;
    } else {
        console.log(t);
        t++;
    
    }
    }

//задание 3
console.log('3 Задание');
let k1 = 0;
str1 = '# # # #\n'
str2 = " # # # #\n"
while (k1<8) {
    if (k1%2 == 0) {
        console.log(str1);
        k1++;
    }else {
        console.log(str2);
        k1++;
    }
}

//4 задание
console.log('4 Задание');
function Min(first_number,second_number) {
    if (first_number < second_number) {
        console.log('Min number is', first_number);
    } else if (second_number < first_number) {
        console.log('Min number is', second_number);
    }else if (first_number == second_number) {
        console.log('Numbers are equal');
    }
}

//вызов функции
Min(5,3)

//5 задание
console.log('5 задание');
function CountSymb(stroka){
    let a;
    a = stroka.split('B').length-1;
    console.log('Буква В встретилась',a,'раза' );
}

CountSymb('BrowsB')

function CountSymbWord(stroka, word){
    let a;
    a = stroka.split(word).length-1;
    console.log('Буква', word,'встретилась',a, 'раза');
}
CountSymbWord('BrowsB','r');

//6 задание
console.log('6 задание');

//можно изменять шаг, изменяя third_number
function range(first_number, second_number, third_number = 1) {
    let arr = [];
    let num = first_number;
    while (num < second_number+1) {
        arr.push(num);
        num = num + third_number;
    }
    return arr;
}

function sum(arr) {
    let summa = 0
    let u = 0
    while (u < arr.length) {
        summa = summa + arr[u]
        u++
    }

    return summa;
}
console.log(range(0, 10));
console.log(sum(range(0,10)));

//7 задание
console.log('7 задание');

function reverseArray(arr) {
    let arr_new = [];
    for (let i = arr.length-1; i >=0; i--) {
        arr_new.push(arr[i])
    }
    return arr_new
}

function reverseArrayInPlace(arr) {
    for (let i = 0, k = arr.length-1; i < k; i++,k--) {
        [arr[i],arr[k]]=[arr[k],arr[i]];
    }
    return arr
}
console.log(reverseArray(range(0, 10)));
console.log(reverseArrayInPlace(range(0, 10)));

//8 задание

//ArrayToList
function ArrayToList(arr) {
    return arr.reduceRight((rest, value) => ({value, rest}), null);
    }
console.log('8 задание ');
console.log('ArrayToList');
console.log(ArrayToList ([1, 2, 3]));


//ListToArray
function ListToArray(list) {
    let array = [];
    for (let i = list; i; i = i.rest) {
      array.push(i.value);
    }
    return array;
  }
console.log('ListToArray');
console.log(ListToArray(ArrayToList([1, 2, 3])));

//Prepend
function Prepend(value, list) {
    return {value, rest: list};
  }
console.log('Prepend')
console.log(Prepend(3, Prepend(4, null)));

//nth
function nth(list, num) {
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else return nth(list.rest, num - 1);
  }
console.log('nth')
console.log(nth(ArrayToList([7, 1, 4]), 2));

//9 задание
console.log('9 задание');

function deepEqual(a1, a2) {
    if (a1 === a2) return true;
    if (a1 == null || typeof a1 != "object" || a2 == null || typeof a2 != "object") return false;

    let keysA1 = Object.keys(a1), keysA2 = Object.keys(a2);
    if (keysA1.length != keysA2.length) return false;

    for (let key of keysA1) {
      if (!keysA2.includes(key) || !deepEqual(a1[key], a2[key])) return false;
    }
    return true;
  }
  
let g = {here: {is: "an"}, object: 2};
console.log(deepEqual(g, k1));
console.log(deepEqual(g, g));

//10 задание
console.log('10 задание');
function flatten(mass) {
return mass.reduce(function (flat, flatter) {
    return flat.concat(Array.isArray(flatter) ? flatten(flatter) : flatter);
}, []);
}
console.log(flatten([[1, 2, 3], [4, 5,6,7,8,9]]));

//11 задание
console.log('11 задание');
let ancestry = ([
    {b: 1832, d: 1905},
    {b: 1876, d: 1956},
    {b: 1683, d: 1724},
    {b: 1714, d: 1748},
    {b: 1907, d: 1997},
    {b: 1761, d: 1833},
    {b: 1535, d: 1582},
    {b: 1918, d: 2012},
    {b: 1877, d: 1968},
    {b: 1696, d: 1724},
    {b: 1602, d: 1642}]);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var diff = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  }).map(function(person) {
    return person.b - byName[person.mother].b;
  });
  console.log(average(diff));

//12 задание
console.log('12 задание');
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

function group(array, groupOf) {
var groups = {};
array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
    groups[groupName].push(element);
    else
    groups[groupName] = [element];
});
return groups;
}

var byCentury = group(ancestry, function(person) {
return Math.ceil(person.d / 100);
});

for (var century in byCentury) {
var ages = byCentury[century].map(function(person) {
    return person.d - person.b;
});
console.log(century + " century: " + average(ages)+ " years");
}

//13 задание
console.log('13 задание');

function Every(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (!predicate(array[i]))
        return false;
    }
    return true;
  }
  
function Some(array, predicate) {
for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
    return true;
}
return false;
}
  
console.log(Every([NaN, NaN, NaN], isNaN));
console.log(Every([NaN, NaN, 4], isNaN));
console.log(Some([NaN, 3, 4], isNaN));
console.log(Some([2, 3, 4], isNaN));
  