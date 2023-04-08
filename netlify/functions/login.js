const { login } = require("./utils/auth")

//write netlify handler for route
exports.handler = async function (event,context){
  const { email, password } = JSON.parse(event.body)
  try {
    //  const faunaAuthResponse = await login(email, password)
     const { secret, instance } = await login(email, password)
     return  {
        statusCode: 200,
        body: JSON.stringify({ secret, instance }),
      }
    
  } catch (error) {
    return {
      statusCode: 400,
      body: `Login error!,${error.stack}`,
      
    };
  }
}