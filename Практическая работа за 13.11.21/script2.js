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