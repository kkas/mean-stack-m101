var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  if(error) {
    console.log(error);
    process.exit(1);
  }

  // Define a doc as a JSON obj.
  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    rating: 'PG',
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ['Peter Benchley', 'Carl Gotlieb']
  };

  // Insert the doc.
  db.collection('movies').insert(doc, function(error, result) {
    if(error) {
      console.log(error);
      process.exit(1);
    }

    // Query for the doc after the insertion.
    // When omitting the parameter for find(), it will then return all the docs
    // in the specified collection.
    var query = {year: 1975, rating: 'PG'};
    db.collection('movies').find(query).toArray(function(error, docs) {
      if(error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
    });

    // Note that the query param is seraching a property in an Array obj.
    var query2 = {'screenplay': 'Peter Benchley'};
    db.collection('movies').find(query2).toArray(function(error, docs) {
      if(error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs by quering an Array field:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
    });

    // Note that the query param is 'nested' and uses >= 90
    var query3 = {'ratings.audience': {'$gte': 90}};
    db.collection('movies').find(query3).toArray(function(error, docs) {
      if(error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs by querying a nested property:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
