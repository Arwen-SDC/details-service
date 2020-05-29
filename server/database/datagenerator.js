const fs = require('fs');
const path = require('path');
const faker = require('faker');

const writePath = path.join(__dirname, '/../POSTGRES.csv');
const writeUsers = fs.createWriteStream(writePath);
writeUsers.write('id|details|images|name\n', 'utf8');

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

function generator(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id}|"${faker.lorem.paragraph()}"|{${getRandomImages()}}|"${faker.commerce.productName()}"\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
        console.log(i);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();

}

generator(writeUsers, 'utf-8', () => {
  writeUsers.end();
});