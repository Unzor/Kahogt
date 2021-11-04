# Kahogt
Kahogt is a Kahoot botter.

# How to get
Option 1: Visiting main page [(kahogt.ml)](https://kahogt.ml) (No downloading, but slowest and most effective)

Option 2: Downloading desktop app (Recommended way, only for Windows)

Option 3: Building from source/using NPM package (Best way to do it on Linux)

# Prequisites (for building and running)
- NodeJS (NEEDED FOR DESKTOP APP)
- Git
- NPM

# Use with NPM package & run 
## NPM Package
Run this in cmd/terminal:
```
npm install kahogt
node index.js
```
index.js:
```javascript
var Kahogt = require('kahogt');

Kahogt.listen(8000, function(){
console.log('App listening at port 8000');
});
```
## From source
Run this in cmd/terminal:
```
git clone https://github.com/Unzor/Kahogt
cd Kahogt
npm install
node index.js
```
