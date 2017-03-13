var getHTML = require('../https-functions');

function print1337 (html) {

    var HTMLObfuscated = "";

    for (var i = 0; i < html.length; i++) {

      if (html.substr(i,3) === "you") {
        HTMLObfuscated += "j00";
      } else if (html.substr(i,2) === "er") {
        HTMLObfuscated += "0r";
      } else if (html.substr(i,2) === "ck") {
        HTMLObfuscated += "x";
      } else if (html.substr(i,1) === "a") {
        HTMLObfuscated += "4";
      } else if (html.substr(i,1) === "e") {
        HTMLObfuscated += "3";
      } else if (html.substr(i,1) === "o") {
        HTMLObfuscated += "0";
      } else if (html.substr(i,1) === "l") {
        HTMLObfuscated += "1";
      } else if (html.substr(i,1) === "s") {
        HTMLObfuscated += "5";
      } else if (html.substr(i,1) === "t") {
        HTMLObfuscated += "7";
      } else {
        HTMLObfuscated += HTMLObfuscated.substr(i,1);
      }

    }

    console.log(HTMLObfuscated);

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, print1337);