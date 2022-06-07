//comparar dois objetos usando a função JSON.strigify().

const fruit1 = {
  name: 'Apple',
  price: '2'
};

const fruit2 = {
  name: 'Apple',
  price: '2'
};

console.log(JSON.stringify(fruit1) === JSON.stringify(fruit2));

//return: true