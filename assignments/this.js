/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: Basically the default principle that if given no rules, will be the active. Unless strict mode is active which will return      undefined.
* 2. 
* 3. 
* 4. 
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

// Principle 4

// code example for Explicit Binding