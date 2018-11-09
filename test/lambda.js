let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.dev.fintechmart.online/werwerwer/1.0/v2/pet`,
        method: 'post',
        query: {},
        headers: { "X-Authorization": "4633745", "Accept": "application/xml", "Content-Type": "application/xml" },
        body: 'dqrfq'
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}