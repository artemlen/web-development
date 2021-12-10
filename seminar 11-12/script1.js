//1 задание
let city1 = {
    Name : "Moscow",
    Population : 10000000
}
console.log ("1 задание")
console.log(city1)

//2 задание
let city2 = {
    Name : "Saint Petersburg",
    Population : 8000000
}
console.log ("\n2 задание")
console.log(city2)

//3 задание
city1.getName = function() {  //метод для city1
    return city1.Name
}
city2.getName = function() {  //метод для city2
    return city2.Name
}

console.log ("\n3 задание")
console.log(city1.getName())
console.log(city2.getName());

//4 задание
console.log ("\n4 задание");

city1.exportStr = function(){ //для city1
    let vivod = "";
    for (let i in this) {
        if (i == "Name" || i == "Population") {
            vivod += i + " = " + `${this[i]}` + '\n';
        }
    }
    return vivod ;
}
console.log(city1.exportStr());

city2.exportStr = function(){ //для city2
    let vivod = "";
    for (let i in this) {
        if (i == "Name" || i == "Population") {
            vivod += i + " = " + `${this[i]}` + '\n';
        }
    }
    return vivod ;
}
console.log(city2.exportStr());

//5 задание
console.log ("\n5 задание")

function getObj() {
    return this
}

city1.getCity = city2.getCity = getObj;

console.log(city1.getCity())
console.log(city2.getCity())

//6 задание
let obj = {}

obj.method1 = function() {
    return this
}
obj.method2 = function() {
    return this
}
obj.method3 = function() {
    return "метод 3"
}
console.log("\n6 задание")
console.log(obj.method1().method2().method3())

//7 задание
let d1 = [45,78,10,3]
d1[7] = 100
console.log("\n7 задание")
console.log(d1)

for (let i=0; i < d1.length;i++) {
    console.log(i + " " + d1[i])
}

//8 задание
let d2 = [45,78,10,3]
sum2 = 0
for (let i=0; i < d2.length;i++) {
    sum2 = sum2 + d2[i]
}
console.log("\n8 задание")
console.log(sum2)

//9 задание
let d3 = [45,78,10,3]
d3[7] = 100
sum3 = 0

//превращение массива в объект
const d3_obj = Object.assign({}, d3);
console.log(d3_obj)

for (i in d3_obj) {
   sum3 = sum3 + d3_obj[i]
}

console.log("\n9 задание")
console.log(sum3)

//10 задание
let d4 = [45,78,10,3]

function my(a,b) {
    return b-a
}

d4.sort(my)

console.log("\n10 задание")
console.log(d4);

//12 задание

function Vector(x, y) {
    this.x = x
    this.y = y
}
Vector.prototype.plus = function plus(otherVector) {
    let x = this.x + otherVector.x
    let y = this.y + otherVector.y
    return new Vector(x, y)
};
Vector.prototype.minus = function minus(otherVector) {
    let x = this.x - otherVector.x
    let y = this.y - otherVector.y
    return new Vector(x, y)
};
Vector.prototype.toString = function toString() {
    return 'Vector{ x: ' + this.x + ', y: ' + this.y + ' }';
}

Vector.prototype.length = function length(){
    return Math.pow(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2), 0.5)
}

console.log("\n12 задание")
console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length())

//13 задание

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}

function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];

	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};


StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}

console.log("\n13 задание")
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));




//14 задание
  function ArraySeq(data) {
    this.position = -1
    this.data = data
  }
  
  ArraySeq.prototype.next = function () {
    if (this.position >= this.data.length - 1) {
      return false
    }
    this.position++
    return true
  }
  
  ArraySeq.prototype.curr = function () {
    return this.data[this.position]
  } 
  
  function RangeSeq(from, to) {
    this.position = from - 1
    this.to = to
  }
  
  RangeSeq.prototype.next = function () {
    if (this.position >= this.to) {
      return false
    }
    this.position++
    return true
  }
  
  RangeSeq.prototype.curr = function () {
    return this.position
  } 

  function logFive(seq) {
    for (let i = 0; i < 5; i++) {
      if (!seq.next()) {
        break
      }
      console.log(seq.curr())
    }
  }

  console.log("\n14 задание")
  logFive(new ArraySeq([1, 2]))
  logFive(new RangeSeq(100, 1000))

//15 задание

//записываем в c1 значения
let c1 = "Екатеринбург Москва"
c1 = c1.split(" ")

let Card = new Object()
Card.from = c1[0]
Card.to = c1[1]
Card.show = function() {
    Card.from = String(Card.from)
    return Card.from + ", " + Card.to
}

console.log("\n15 задание")
console.log(Card.show())



//16 задание
class Human {
    #name
    #height
    #age
    
 
    constructor(name, age, height) {
        this.#name = name
        this.#age = age
        this.#height = height
    }

    getInfo() {
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
 
    get firstname() {
        return this.#name;
    }
}
 
let humans = [new Human("Коля", 23, 180), new Human("Даша", 19, 170), new Human("Ваня", 18, 192), new Human("Петя", 45, 178), new Human("Вася", 34, 197), new Human("Джони", 40, 168), new Human("Катя", 37, 160), new Human("Петя", 29, 200), new Human("Соня", 21, 172), new Human("Женя", 25, 175)];

console.log("\n16 задание")
console.log("getInfo")
for (let i of humans)
    console.log(i.getInfo())

console.log("\nfirstname")
for (let i of humans)
    console.log(i.firstname)

//18 задание
console.log("\n18 задание")
let dt1 = new Date(2045, 0, 1, 0, 0);
console.log(dt1)

//19 задание
let current_time = new Date()
let dt2 = (current_time.getTime() / 1000)
console.log("\n19 задание")
console.log("Кол-во секунд, которое прошло с 1 января 1970 года по текущий момент = " + dt2)

//20 задание
function getDays(year, month) {
    if (month == 1) {
        return 31 + " days" + " in January " + year
    }
    if (month == 3) {
        return 31 + " days" + " in March " + year
    }
    if (month == 4) {
        return 30 + " days" + " in April " + year
    }
    if (month == 5) {
        return 31 + " days" + " in May " + year
    }
    if (month == 6) {
        return 30 + " days" + " in June " + year
    }
    if (month == 7) {
        return 31 + " days" + " in July " + year
    }
    if (month == 8) {
        return 31 + " days" + " in August " + year
    }
    if (month == 9) {
        return 30 + " days" + " in September " + year
    }
    if (month == 10) {
        return 31 + " days" + " in October " + year
    }
    if (month == 11) {
        return 30 + " days" + " in November " + year
    }
    if (month == 12) {
        return 31 + " days" + " in December " + year
    }

    //февраль
    if (month == 2 & year % 4 == 0) {
        return 29 + " days" + " in February " + year
    }
    if (month == 2 & year % 4 != 0) {
        return 28 + " days" + " in February " + year
    }
}

console.log("\n20 задание")
console.log(getDays(2020, 2))
console.log(getDays(2019, 2))
console.log(getDays(2017, 5))
console.log(getDays(1974, 6))