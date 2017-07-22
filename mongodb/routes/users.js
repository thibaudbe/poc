const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/test-mongodb'


const data = (users) =>
  Object.assign({ title: 'Express' },
  users.length !== 0
    ? { users }
    : { users: [] })

router.get('/', (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err
    db.collection('users').find().toArray((err, users) => {
      if (err) throw err
      res.render('users', { title: 'Express', users })
      db.close()
    })
  })
})

router.post('/', (req, res, next) => {
  // res.send(req.body.name)
  // db.users.insert({ name: req.body.name })
  //   .then(users => {
  //     res.render('users', {
  //       title: 'Express',
  //       users
  //     })
  //   })
  //   .fail(err => {
  //     res.status(err.status || 500)
  //     res.render(err)
  //   })

  MongoClient.connect(url, (err, db) => {
    if (err) throw err
    var myobj = { name: req.body.name }
    db.collection('users').insertOne(myobj, (err) => {
      if (err) throw err
      console.log('1 record inserted')
      res.redirect('/users')
      db.close()
    })
  })
})

module.exports = router
