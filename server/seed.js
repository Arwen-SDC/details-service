/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const faker = require('faker');
const db = require('./database/index.js');


let imageCounter = 1;

const getRandomImages = () => {
  const results = [];
  const limit = faker.random.number({ min: 4, max: 7 });

  for (let j = 0; j < limit; j += 1) {
    const imgURL = `https://aragorn-images.s3-us-west-2.amazonaws.com/${imageCounter}.jpg`;
    results.push(imgURL);
    imageCounter += 1;
    if (imageCounter > 30) {
      imageCounter = 1;
    }
  }
  return results;
};

const fillData = () => {
  const data = [];
  for (let i = 1; i <= 100; i += 1) {
    const newGame = new db.Game({
      id: i,
      name: faker.commerce.productName(),
      details: faker.lorem.paragraphs(3),
      images: getRandomImages(),
    });
    data.push(newGame);
  }
  return data;
};


async function seed() {
  await db.deleteAll();
  const data = fillData();
  for (const game of data) {
    await db.save(game);
  }
  console.log('DONE SEEDING');
}

seed();
