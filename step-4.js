var https = require('https');

function getHTML (requestOptions, callback) {
  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    var bufferedData = '';
    response.on('data', function(data) {
        bufferedData += data;
    });
    response.on('end', function() {
      callback(bufferedData);
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytanris.github.io',
  path: '/http-examples/step2.html'
}

getHTML(requestOptions, printHTML);