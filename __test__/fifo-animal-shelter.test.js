'use strict';

const AnimalShelter = require('../fifo-animal-shelter/fifo-animal-shelter');

const Animal = require('../fifo-animal-shelter/fifo-animal-shelter');

test('animal shelter', () => {

  const shelter = new AnimalShelter();

  const fluffy = new Animal('Fluffy', 'cat');
  const mittens = new Animal('Mittens', 'cat');
  const shadow = new Animal('Shadow', 'cat');
  const fido = new Animal('Fido', 'dog');
  const rover = new Animal('Rover', 'dog');
  const max = new Animal('Max', 'dog');

  console.log(fluffy);

  shelter.enqueue(fluffy);
  shelter.enqueue(mittens);
  shelter.enqueue(rover);

  console.log(shelter);


  // expect().toEqual(1);
});
