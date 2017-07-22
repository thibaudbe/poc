const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/test-mongodb' // process.env.MONGO_PORT

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  console.log('Database created !')

  db.createCollection('users', (err, res) => {
    if (err) throw err
    console.log('Table created !')
    db.close()
    // const myobj = { name: 'John' }
    // db.collection('users').insertOne(myobj, (err, res) => {
    //   if (err) throw err
    //   console.log('1 record inserted')
    //   db.close()
    // })
  })
})

/**
 * TODO
 * 
 * - only insert if doesnt exists and not empty
 * - create collection if doesnt exists
 * - edit/remove
 * - gestion des erreurs en doublons
 */