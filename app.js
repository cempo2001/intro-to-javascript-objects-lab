const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

/*
Exercise 1

Inspect the pokemon array.

After inspecting it, log only the name of Pokémon number 59.
Because array indexes start at 0, Pokémon number 59 is at index 58.
*/

// Uncomment this when you want to inspect all Pokémon:
// console.dir(pokemon, { maxArrayLength: null });

console.log('Exercise 1 Result:', pokemon[58].name);


/*
Exercise 2

Inspect the game object.
*/

// Uncomment this when you want to inspect game:
// console.log(game);


/*
Exercise 3

1. Add a new property called difficulty to the game object.
2. Assign a difficulty value.
*/

game.difficulty = 'Medium';

console.log('Exercise 3 Result:', game.difficulty);


/*
Exercise 4

1. Select a starter Pokémon.
2. Add it to game.party.

We selected Bulbasaur:
- Pokémon number: 1
- Array index: 0
*/

let starterPokemon = pokemon[0];

game.party.push(starterPokemon);

console.log('Exercise 4 Result:', game.party);


/*
Exercise 5

Choose three additional Pokémon and add them to game.party.

We selected:
- Charizard: Pokémon 6, index 5
- Gyarados: Pokémon 130, index 129
- Mewtwo: Pokémon 150, index 149
*/

let charizard = pokemon[5];
let gyarados = pokemon[129];
let mewtwo = pokemon[149];

game.party.push(charizard);
game.party.push(gyarados);
game.party.push(mewtwo);

console.log('Exercise 5 Result:', game.party);


/*
Exercise 6

Set completed to true for gyms with a difficulty below 3.
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

console.log('Exercise 6 Result:', game.gyms);


/*
Exercise 7

Evolve the starter Pokémon.

Bulbasaur evolves into Ivysaur:
- Ivysaur is Pokémon number 2.
- Ivysaur is at index 1 in the pokemon array.
- Bulbasaur is currently at index 0 in game.party.

Replace Bulbasaur with Ivysaur using splice().
*/

let ivysaur = pokemon[1];

game.party.splice(0, 1, ivysaur);

console.log('Exercise 7 Result:', game.party);


/*
Exercise 8

Print the name of each Pokémon in game.party.
*/

for (let i = 0; i < game.party.length; i++) {
  console.log('Exercise 8 Result:', game.party[i].name);
}


/*
Exercise 9

Print the names of all starter Pokémon.

A starter Pokémon has starter set to true.
*/

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log('Exercise 9 Result:', pokemon[i].name);
  }
}


/*
Exercise 10

Create a catchPokemon method and add it to game.

The method:
- accepts pokemonObj as an argument
- adds pokemonObj to this.party
- does not return anything
*/

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};

// Catch Eevee:
// Eevee is Pokémon number 133, so its index is 132.

let eevee = pokemon[132];

game.catchPokemon(eevee);

console.log('Exercise 10 Result:', game.party);


/*
Exercise 11

Update the catchPokemon method.

The method should:
1. Add pokemonObj to game.party.
2. Find pokeball in game.items.
3. Decrease its quantity by 1.
4. Not return anything.
*/

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);

  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].name === 'pokeball') {
      this.items[i].quantity = this.items[i].quantity - 1;
    }
  }
};

// Catch Snorlax:
// Snorlax is Pokémon number 143, so its index is 142.

let snorlax = pokemon[142];

game.catchPokemon(snorlax);

console.log('Exercise 11 Party Result:', game.party);
console.log('Exercise 11 Items Result:', game.items);


/*
Exercise 12

Set completed to true for gyms with a difficulty below 6.
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

console.log('Exercise 12 Result:', game.gyms);


/*
Exercise 13

Create a gymStatus method in game.

The method should:
- accept no arguments
- create gymTally
- count completed gyms
- count incomplete gyms
- log gymTally
- return nothing
*/

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };

  for (let i = 0; i < this.gyms.length; i++) {
    if (this.gyms[i].completed === true) {
      gymTally.completed = gymTally.completed + 1;
    } else {
      gymTally.incomplete = gymTally.incomplete + 1;
    }
  }

  console.log('Exercise 13 Result:', gymTally);
};

game.gymStatus();


/*
Exercise 14

Create a partyCount method in game.

The method should:
- accept no arguments
- count Pokémon in game.party
- return that number
*/

game.partyCount = function () {
  return this.party.length;
};

console.log('Exercise 14 Result:', game.partyCount());


/*
Exercise 15

Set completed to true for gyms with a difficulty below 8.
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}

console.log('Exercise 15 Result:', game.gyms);


/*
Exercise 16

Log the entire game object and inspect all changes.
*/

console.log('Exercise 16 Result:');
console.dir(game, { depth: null });