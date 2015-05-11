# mysql-connection

[![Build Status](https://travis-ci.org/confuser/node-mysql-connection.png?branch=master)](https://travis-ci.org/confuser/node-mysql-connection)
[![Coverage Status](https://coveralls.io/repos/confuser/node-mysql-connection/badge.png?branch=master)](https://coveralls.io/r/confuser/node-mysql-connection?branch=master)

An abstraction of mysql2 pooling for simple queries.

## Installation
```
npm install mysql-connection --save
```

## Usage
```js

var Db = require('mysql-connection')
  , mysql = require('mysql2')
  , settings =
    { host: 'localhost'
    , user: 'root'
    , password: ''
    , database: 'test'
    , connectionLimit: 2
    }
  , db = new Db(mysql2, settings)

// Simple query
db.query('sql here', [ 'params' ], function (error, data) {
  console.log(data)
})

// Access node-mysql2 pool
db.pool.getConnection(error, connection) {
  connection.release()
})
```
