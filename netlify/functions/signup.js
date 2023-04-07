const { CreateUser, Login } = require("./utils/auth")

//write netlify handler for route
exports.handler = async function (event,context){
  const { email, password } = JSON.parse(event.body)
  try {
     const faunaSignUpResponse = await CreateUser(email, password)
     const { ref = null } = faunaSignUpResponse

     if(ref) {
      const faunaAuthResponse = await Login(email, password)
      const { secret, instance } = faunaAuthResponse

      return {
        statusCode: 200,
        body: JSON.stringify({secret, instance})
       }
     }

  } catch (error) {
    
    return {
      statusCode: 400,
      body: "Account already exists.",
    };
  }
}