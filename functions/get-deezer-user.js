const request = require("request")
const header = {
  "Access-Control-Allow-Origins": "*"
}

exports.handler = (event, context, callback) => {
  const id = event.queryStringParameters.id
  const TRACKS_URL = `https:://api.deezer.com/user/${id}`

  request.get(Tracks_URL, (error,res,body) => {
    if (error) {
     callback(null,{
       statusCode: 404,
       body: "User doesnt exist...What did you do?!"
      })
    }
    callback(null, {
      statusCode: 200,
      body,
      headers
    })
  })
}