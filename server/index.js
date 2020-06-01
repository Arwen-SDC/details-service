require('newrelic');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const db = require('./database/index.js');
const db = require('./database/cassandra.js');



const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games/:id', express.static('public'));
app.use(express.json());


//CRUD

//CREATE
app.post('/api/addGame/:id', (req, res) => {
  const newGame = {'csgo': "silver4"};
  res.send(newGame);

});

//READ
app.get('/api/games/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  // if (id < 0 || id > 100) {
  //   id = 1;
  // }
  db.getGame(id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      res.end();
    } else {
      // console.log(result)
      res.send(result);
      res.end();
    }
  });
});












//                     //delete
// app.post('/api/deleteGame/:id', (req, res) => {
//   const gameId = req.body.id;
//   const gameToDelete = { id: gameId };
//   db.Game.deleteOne(gameToDelete, err => {
//     if(err) {
//       res.send(500);
//     } else {
//       res.send(200)
//     }
//   });
// })

//                     //update
// app.post('/api/update/:id', (req, res) => {
//   const filter = { id: req.body.id };
//   const update = { name: req.body.name,
//                    details: req.body.details,
//                    images: req.body.images
//                   };
//   db.Game.findOneAndUpdate(filter, update, (err) => {
//     if (err) {
//       res.send(500);
//     } else {
//       res.send(200);
//     }
//   });

// });

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});

module.exports = app;
