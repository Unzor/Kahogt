# Kahogt
Kahogt is a Kahoot botter.

# Prequisites
- NodeJS
- Git
- NPM

# Build & run 
## NPM Package
Run this in cmd/terminal:
```
npm install kahogt
node index.js
```
index.js:
```javascript
var Kahogt=require('kahogt');

Kahogt.listen(8000, function(){
console.log('Kahogt listening at port 8000');
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
