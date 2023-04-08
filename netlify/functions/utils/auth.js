const { query } = require("./fauna")
const { Login, Create, Collection, Match, Index, Get} = require("faunadb").query

exports.login = async function ( email, password){
   return query(
    Login(
      Match(Index("users_by_email"), email),
      { password },
    )
   )
}



exports.CreateUser = async function (email, password){
  return query(
    Create(
      Collection("User"),
      {
        credentials: { password },
        data: {
          email ,
        },
      }
    )
  )
}