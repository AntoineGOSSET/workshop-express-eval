let chalk = require('chalk');
var fs = require('fs');
const app = require('./src/app');

// port
const port = process.argv[2];

// start server here
app.listen(port, function(){
    console.log(chalk.green('Hello web server'));
});

/**app.get('/bingo', function(req, res) {
    var liste = fs.readFileSync("src/numbers.txt").toString().split("\r\n")
    liste.pop()
    res.end(liste.join(","))
})*/


app.get('/bingo', function(req, res){
    var numbers = req.query.mynumbers
    res.end(numbers)
  })