const $ = require('jquery');
import Person from './modules/Person';
//const Person = require('./modules/Person');

//alert('This is a test for our webpack automation');

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

const john = new Person('John Smith', 'red');
john.greet();

const jane = new Adult('Jane Doe', 'blue');
jane.greet();
jane.payTaxes();

$('h1').css({fontWeight: 'bold', color: '#ffffff'});