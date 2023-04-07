const faunadb = require("faunadb")

const secret = process.env.REACT_APP_FAUNADB_SECRET

if (typeof secret === 'undefined' || secret === '') {
  console.error('The FAUNADB_SECRET environment variable is not set, exiting.')
  process.exit(1)
}


exports.query = function (q) {
    let client = new faunadb.Client({ secret })
    return client.query(q)
}