import config from './config'
var promise =require('bluebird')
var options={
    promiseLib:promise
}

var pgp = require('pg-promise')(options);
var db = pgp(config.db )

export default db;
