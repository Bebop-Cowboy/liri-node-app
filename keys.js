var fs = require ('fs');
var Twitter = require ('twitter');
var Spotify = require ('node-spotify-api');
var request = require ('request');

//Scripts
var keys = require('./keys.js');

var app = {
  "tweets": function(){
    var client = new Twitter(keys);
    client.get('statuses/user_timeline', function(error, tweetData, reponse) {
      if (!error) {
        console.log(' ');
        console.log ('=============== Tweets ===============');
        tweetData.forEach(function(obj) {
          console.log ('---------------------------');
          console.log ('Time: ' + obj.create_at);
          console.log ('Tweet: ' + obj.text);
          console.log ('---------------------------');
          console.log ('  ');
        });
        console.log ('=====================================');
        console.log ('  ');

        app.logDate(tweetData);
    }else {
      console.log (error);
    }
  });
},
"spotify-this-song": f
