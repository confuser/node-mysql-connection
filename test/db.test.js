var should = require('should')
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
    var db = new Db(settings)

    db.query('SHOW VARIABLES LIKE "%version%"', function (error, data) {
      should.not.exist(error)

      should.exist(data[3]['Variable_name'])

      done()
    })
  })

  it('should give access to pool', function () {
    var db = new Db(settings)

    should.exist(db.pool)
  })

  it('should allow params within query', function (done) {
    var db = new Db(settings)

    db.query('SHOW VARIABLES WHERE Variable_name = ?', [ 'version' ], function (error, data) {
      should.not.exist(error)

      should.exist(data[0]['Variable_name'])

      done()
    })
  })

})
