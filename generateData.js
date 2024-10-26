import { faker } from '@faker-js/faker';
import fs from 'fs';


const generateGameName = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};
const generatePlacares = (num) => {
  const placares = [];
  for (let i = 0; i < num; i++) {
    placares.push({
      id: i + 1,
      usuario: faker.name.firstName(),
      game:  generateGameName(),
      score: faker.number.int({ min: 0, max: 100 }), // Corrigido
    
    });
  }
  return placares;
};

const placares = generatePlacares(10); // Gera 10 placares

fs.writeFileSync('db.json', JSON.stringify({ placares }, null, 2));
console.log('Dados gerados com sucesso!');