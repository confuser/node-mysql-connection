var mysql = require('mysql2')

module.exports = Db

function Db (settings) {
  this._pool = mysql.createPool(settings)
}

Db.prototype.query = function (sql, params, cb) {

  if (typeof params === 'function') {
    cb = params
    params = undefined
  }

  this._pool.getConnection(function (error, connection) {
    if (error) return cb(error)

    connection.query(sql, params, function (err, results) {
      cb(err, results)

      connection.release()
    })
  })
}

Object.defineProperty(Db.prototype, 'pool',
  { get: function() {
      return this._pool
    }
  })
