/* Task-1
    The class Movie is stated below. An instance of class Movie represents a film. 
    This class has the following three properties:
        title, which is a String representing the title of the movie
        studio, which is a String representing the studio that made the movie
        rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments, and sets the 
 respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default
 when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new 
array of only those movies in the input array with a rating of "PG". You may assume the input array 
is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
 the studio “Eon Productions”, and the rating “PG­13”

*/

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    const PG = movies.filter(ele => ele.rating === "PG");
    return PG;
  }
}

const obj = new Movie("Narnia", "Walt-Disney", "PG15");
const obj1 = new Movie("End Game", "Rockstar");
const obj2 = new Movie("Casino Royale", "Eon Productions", "PG­13");

let movies = [obj, obj1, obj2];
console.log(Movie.getPG(movies));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Task-2
// Convert the UML diagram to Typescript class. - use number for double
// Image address : https://github.com/rvsp/typescript-oops/blob/master/images/ClassDiagram_Circle.png?raw=true

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get toString() {
    return `"Circle[radius = ${this.radius}, color = ${this.color}]"`;
  }
  get area() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
  get circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

const objec = new Circle("2", "Red");
console.log(objec.radius, objec.color);
objec.radius = "4.5";
console.log(objec.radius);
objec.color = "blue";
console.log(objec.color);
console.log(objec.area)
console.log(objec.circumference)
console.log(objec.toString)

//---------------------------------------------------------------------------------------------------------------------------

// Task-3
// Write a “person” class to hold all the details.

class Person {
  constructor(name, age, gender, height) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
  }
  get vote() {
    if (this.age > 18) {
      return `${this.name} can vote`;
    } else {
      return `${this.name} cannot vote`;
    }
  }
}
const person1 = new Person("Aravind", 22, "Male", 170);
const person2 = new Person("Joy", 17, "Female", 150);

console.log(person1.age);
console.log(person2.gender);
console.log(person1.vote);
console.log(person2.vote);

//------------------------------------------------------------------------------------------------------

//Task-4
//Write a class to calculate the Uber price.
// For each km ,the price is 30 rs.

class Uber {
  constructor(name, km) {
    this.name = name;
    this.km = km;
  }
  get price() {
    const basePrice = 50;
    const pricePerKm = 20;
    return `The bill for ${this.name} is ${
      basePrice + this.km * pricePerKm
    } rupees.`;
  }
}

const cust1 = new Uber("Raj", 0.3);
const cust2 = new Uber("Max", 5);
console.log(cust1.price);
console.log(cust2.price);

//------------------------------------------------------------------------------------------------------------------
