const { query } = require("./fauna")

exports.Login = async function ( email, password){
   query(
    Login(
      Match(Index("users_by_email"), email),
      { password },
    )
   )
}



exports.CreateUser = async function (email, password){
  query(
    Create(
      Collection("users"),
      {
        credentials: { password },
        data: {
          email ,
        },
      }
    )
  )
}