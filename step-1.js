var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytanris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function(response) {

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      console.log("------------");
      console.log("Chunk received: " + data + "\n");
      console.log("------------");
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();