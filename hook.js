var http = require('http');
var exec = require ('child_process').exec;
var createHandler = require('gitlab-webhook-handler');
var handler = createHandler({ path: '/', secret: 'experimental-secret' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777)

console.log("Gitlab Hook Server running at http://0.0.0.0:7777");

handler.on('error', function (err) {
        console.error('Error:', err.message)
})

handler.on('push', function (event) {
        console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)

        exec('./pruebas.sh', function (error, stdout,stderr) {
                console.log(stdout);
                if(error != null){
                        console.log('Error durante la ejecución del ejcrip' + stderr);
                }
        });


});
