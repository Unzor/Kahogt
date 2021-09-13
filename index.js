function flood (name, number, id, cb){
  var rl=require('readline');

 const Kahoot = require("kahoot.js-updated");
const sleep = require("system-sleep");

// main vars

const kahootCode = id;
const kahootBotPrefix = name;
const kahootBotNumberSeperator = ' #';
const numberOfBots = number; // usually 75 or under. 51 as default.

// end main vars

for (var i = 0; i < numberOfBots; i++) {
    cb('joining bot ' + i + '/' + numberOfBots);
    let client = new Kahoot;
    client.setMaxListeners(Number.POSITIVE_INFINITY);
    client.join(kahootCode, kahootBotPrefix + kahootBotNumberSeperator + i);
    client.on("QuestionStart", question => {
      cb('choosing the first answer..');
        question.answer(0);
    cb('---------------------------');
    });
    cb('joined bot ' + i + '/' + numberOfBots);
    sleep(10);
}
};

const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
var path=require('path');

app.use(express.static(path.join(__dirname + '/public')))

app.post('/flood', function(req, res){
flood(req.body.name, req.body.number, req.body.pin, function(a){
  res.write('\n' + a);
});
});

app.listen(8000, () => {
 require("openurl").open("http://localhost:8000");
})