/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: Basically the default principle that if given no rules, will be the active. Unless strict mode is active which will return      undefined.
* 2. Implicit Binding: this principle only applies to methods with objects and is the one used in most situations. 
* 3. New Binding: creates a new object and uses the 'new' keyword to guide towards it
* 4. Explicit Binding: allows you to specifically and immediately invoke a function by choosing what the 'this' keyword is.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example(){
    console.log(this.test)
}

var test = 'Test this principal';

example();



// Principle 2

// code example for Implicit Binding

let person = {
    name: 'Shaun',
    age: '23',
    location: 'Los Angeles',
    greet: function(){
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old and I live in ${this.location}`)
    }
}

person.greet();

// Principle 3

// code example for New Binding

function Test(trial){
    this.phrase = trial;
}

let myTest = new Test('This is a trial run!');

console.log(myTest.phrase);

// Principle 4

// code example for Explicit Binding

function human(){
    console.log(this.greeting)
}

let personOne = {
    name: 'Arnold',
    greeting: 'Hello',
}

let personTwo = {
    name: 'John',
    greeting: 'Howdy',
}

human.call(personOne);
human.call(personTwo);