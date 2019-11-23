var john = {

    firstname: 'john',

    lastname: 'smith',

    bithyear: 1990,

    family: ['jane', 'jack', 'bob', 'emily'],

    isMarried: false

};



console.log(john.firstname);

console.log(john['lastname']);

var x = 'birthyear';

console.log(john[x]);



var jane = new Object();



jane.lastname = 'robinson';

jane.firstname = 'jane';

jane.dob = 1999;



console.log(jane);