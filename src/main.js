const city = 'Ireland';
const something = 'Guinness';
const otherthing = 'Leprachaums';

function green(template, ...values) {
  return template.reduce((acc, att, i) => `${acc}
      <span class="green">${values[i - 1]}</span>
      ${att}
    `);
}

const ireland = green`I live in ${city}, the city of ${something} and ${otherthing}`;

document.body.innerHTML = ireland;
// ----------------------------------------------

// class
function Animal(kind, sound) {
  // constructor
  this.kind = kind;
  this.sound = sound;
  // this.hello = function hello() {
  //   console.log(`${this.sound} I'm a ${this.kind}!`);
  // };
}

// method
Animal.prototype.hello = function hello() {
  console.log(`${this.sound} I'm a ${this.kind}!`);
};

const dog = new Animal('dog', 'auau');
dog.hello();
const cat = new Animal('cat', 'meow');
cat.hello();

// ---------------------------------------------

// Symbols
const obj = {
  [Symbol('name')]: 'Ebraim',
  [Symbol('age')]: 28,
  city: 'Dublin',
};

const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map((sym) => obj[sym]);

console.log(obj);
console.log(symbols);
console.log(data);

// ----------------------------------------------

// For...Of
const txt = 'Ireland';
console.log(Object.values(txt));
for ( letter in txt ) {
  console.log(letter);
}

const rowWeights = arr => arr.reduce((acc, att, i) => (acc[i%2]+=att, acc), [0, 0]);
console.log(rowWeights([50, 60, 70, 80]));
