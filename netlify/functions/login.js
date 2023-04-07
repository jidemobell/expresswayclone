const { Login } = require("./utils/auth")

//write netlify handler for route
exports.handler = async function (event,context){
  const { email, password } = JSON.parse(event.body)
  try {
     const faunaAuthResponse = await Login(email, password)
     const { secret, instance } = faunaAuthResponse
     return {
      statusCode: 200,
      body: JSON.stringify({secret, instance})
     }
  } catch (error) {
    return {
      statusCode: 400,
      body: "Not found or invalid password!",
    };
  }
}