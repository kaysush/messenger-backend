express = require('express')
app = express()
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function(request, response){
	response.send('Hello World')
})


app.listen(port, ip);
console.log("Server running on " + ip + ":" + port);

module.exports = app;
