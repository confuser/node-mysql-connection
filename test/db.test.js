var assert = require('assert')
  , mysql = require('mysql2')
  , Db = require('../db')
  , settings =
    { host: 'localhost'
    , user: 'root'
    , password: ''
    , database: 'test'
    , connectionLimit: 2
    }

describe('Db', function () {

  it('should connect to a database', function (done) {
    var db = new Db(mysql, settings)

    db.query('SHOW VARIABLES LIKE "%version%"', function (error, data) {
      assert.equal(error, undefined)

      /*jshint camelcase: false */
      /*jshint sub:true */
      // We have little control over MySQL naming convention
      assert.notEqual(data[3]['Variable_name'], undefined)

      done()
    })
  })

  it('should give access to pool', function () {
    var db = new Db(mysql, settings)

    assert(db.pool)
  })

  it('should allow params within query', function (done) {
    var db = new Db(mysql, settings)

    db.query('SHOW VARIABLES WHERE Variable_name = ?', [ 'version' ], function (error, data) {
      assert.equal(error, undefined)

      /*jshint camelcase: false */
      /*jshint sub:true */
      // We have little control over MySQL naming convention
      assert(data[0]['Variable_name'])

      done()
    })
  })

  it('should return errors', function (done) {
    var db = new Db(mysql, settings)

    db.query('SHOW VARIABLES WHER Variable_name = ?', [ 'version' ], function (error) {
      assert(error)

      done()
    })
  })

})
