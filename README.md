# mysql-connection

[![Build Status](https://travis-ci.org/confuser/node-mysql-connection.png?branch=master)](https://travis-ci.org/confuser/node-mysql-connection)

An abstraction of mysql2 pooling for simple queries.

## Installation

    npm install mysql-connection

## Usage

Below is a simple example for usage:

```js

var Db = require('mysql-connection')
  , settings =
    { host: 'localhost'
    , user: 'root'
    , password: ''
    , database: 'test'
    , connectionLimit: 2
    }
  , db = new Db(settings)

// Simple query
db.query('sql here', [ 'params' ], function (error, data) {
  console.log(data)
})

// Access node-mysql2 pool
db.pool.getConnection(error, connection) {
  connection.release()
})
```

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
