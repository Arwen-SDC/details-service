const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

// NEW CASSANDRA CLIENT
const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'gameschema'
  });


const getGame = (id, callback) => {

    const query = `SELECT * from game WHERE id = ${id};`;
    client.execute(query)
    .catch(error => {
        callback(error, null);
       })
    .then(result => {
         return callback(null, result);
        });

};

module.exports.getGame = getGame;
