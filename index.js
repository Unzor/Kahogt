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
    client.join(kahootCode, kahootBotPrefix + kahootBotNumberSeperator + i + 1);
    client.on("QuizEnd", () => {
cb('Quic ended!');
});
    client.on("QuestionStart", question => {
      cb('choosing the first answer..');
        question.answer(0);
    cb('---------------------------');
    });
    cb('joined bot ' + i + '/' + numberOfBots);
    sleep(1)
}
};

const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
var path=require('path');

app.get('/', function(req, res){
  res.send(`<style>
    body {
      overflow: hidden; 
      text-align: center;
  }
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,400&display=swap');
  .create {
   font-size:14px;
   color:white;
  }
.create1 {
  font-size:13px;
  color:white;
}
a{
  text-decoration:none;
  color:white;
  font-size:13px;
}
a:hover{
  text-decoration:underline;
}
.createcontainer{
  text-align: center;
}
.createcontainer2{
  position: fixed;
  left: 50%;
  bottom: -10px;
  -webkit-transform: translate(-50%, -50%);
  margin: 0 auto;
}
@keyframes kahoot{25%{background:#41c4de;}50%{background:#8cc73f;}75%{background:#f3d333;}100%{background:#f78e56;}}
body{
  background:#42c4de;
animation:kahoot 14s infinite;
animation-direction:al\ternate;
font-family: 'Montserrat', sans-serif;
}
input{
  width:222px;
  height:37px;
  border:2px #CCD4D0 solid;
  margin-left: auto;
  margin-right: auto;
  display:block;
  transition:0.3s;
  padding-top:4px;
padding-right:6px;
padding-bottom:4px;
padding-left:6px;
}
button{
  width:238px;
  height:50px;
  border: 0px;
  margin-left: auto;
  margin-right: auto;
  display:block;
  transition:0.3s;
  background-color: #333333;
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  text-align:center;
  
}
input:focus{
  border:2px black solid;
}
img{
  width:255px;
  height:89.9851px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  filter: invert(99%) sepia(95%) saturate(0%) hue-rotate(33deg) brightness(104%) contrast(101%);
}
input[type="text"]
{
    font-size:1.25rem;
  text-align:center;
  font-family: 'Montserrat', sans-serif;
  font-weight:700;
  color:black;
}
input::-webkit-input-placeholder {
  font-family: 'Montserrat', sans-serif;
  color:#B5B5B5;
}

input:-ms-input-placeholder {
  font-family: 'Montserrat', sans-serif;
  color:#B5B5B5;
}

input:-moz-placeholder {
  font-family: 'Montserrat', sans-serif;
  color:#B5B5B5;
}

input::-moz-placeholder {
  font-family: 'Montserrat', sans-serif;
  color:#B5B5B5;
}
input + button {
  margin-top: 8px;
}

html, body {
  height: 417px;
}

.fall {
  position: absolute;
  left: 50%;
-webkit-transform: translate(-50%, 0%);
    display: block;
  -webkit-animation-name: moveDown;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-duration: 1s;
  animation-fill-mode: forwards;
}

@-webkit-keyframes moveDown { 0% {top: 0;}
100%{top:667px; }
}

.hidden {
    position: absolute;
  top: 100%;
}

.jump {
  position: absolute;
  right: 50%;
  transform: translate(50%, 0%);
    display: block;
  -webkit-animation-name: moveUp;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-duration: 1s;
  animation-fill-mode: forwards;
}

@-webkit-keyframes moveUp { 0% {top: 100%;}
100%{top:0px; }
}
</style>
</head>
<body>
  <div class="log hidden">
<h1> Log </h1>
<textarea style="margin: 0px; height: 761px; width: 795px; resize: none;"></textarea>
    </div>

  <div class="main">
  <div></div>
  <br><br><br><br><br><br>
<div id="top">
  <br><br><br><br>
  <img src="https://raw.githubusercontent.com/Unzor/Kahogt/main/public/logo.png"></img>
  <br>
  <input id="id" placeholder="Game PIN to flood..."> 
<div></div>
<input id="name" placeholder="Bot name..."> 
<div></div>
<input id="number" placeholder="Number of bots..">
<div style="visibility: hidden;">a</div>
<button onclick="flood()">Flood!</button>
</div>
<br><br><br><br><br><br><br><br>
  </div>


<script>
    function loadLog(logValue) {
        logTa = document.querySelector("textarea");
        logTa.value = logValue;
        scrollLogToBottom()
    }

    function scrollLogToBottom() {
        logTa = document.querySelector("textarea");
        logTa.scrollTop = logTa.scrollHeight;
    }

  var n=0;
function get_(id){
return document.getElementById(id);
};

function flood(){
  document.getElementsByClassName('main')[0].setAttribute('class', 'main fall')

  setTimeout(function(){
document.getElementsByClassName('log')[0].setAttribute('class', 'log jump');

setTimeout(function(){
  const request = new XMLHttpRequest();
      request.open("POST",  '/flood');

      request.setRequestHeader('Content-type', 'application/json');

        const params = {
    pin: get_('id').value,
   name: get_('name').value,
   number: get_('number').value
      };

      request.send(JSON.stringify(params));

      request.onreadystatechange=function(){
 loadLog(request.response);
      }

}, 1600);

  }, 1600);
}
  </script>
  </div>
  </body>
`);
});

app.post('/flood', function(req, res){
flood(req.body.name, req.body.number, req.body.pin, function(a){
  res.write('\n' + a);
});
});

app.listen(8000, function(){console.log('Listening at port 8000')});
