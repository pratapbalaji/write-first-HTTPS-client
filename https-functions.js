var https = require('https');

module.exports = function getHTML (requestOptions, callback) {
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
};
