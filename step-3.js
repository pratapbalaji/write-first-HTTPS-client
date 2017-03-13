var https = require('https');

function getAndPrintHTML (requestOptions) {
  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    var bufferedData = '';
    response.on('data', function(data) {
        bufferedData += data;
    });
    response.on('end', function() {
      console.log('Buffered Data: ' + bufferedData);
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytanris.github.io',
  path: '/http-examples/step2.html'
}

getAndPrintHTML(requestOptions);