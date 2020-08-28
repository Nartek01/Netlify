const request = require("request")
const header = {
  "Access-Control-Allow-Origins": "*"
}

exports.handler = (event, context, callback) => {
  const id = event.queryStringParameters.id
  const TRACKS_URL = `https:://api.deezer.com/user/${id}/tracks`

  request.get(Tracks_URL, (error,res,body) => {
    if (error) {
     callback(null,{
       statusCode: 500,
       body: "Error at server!"
      })
    }
    callback(null, {
      statusCode: 200,
      body,
      headers
    })
  })
}