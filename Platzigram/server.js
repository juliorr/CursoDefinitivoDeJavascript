var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Platzigram'});
});

app.get('/signup', function (req, res) {
  res.render('index', {title: 'Platzigram - Signup'});
});

app.get('/signin', function (req, res) {
  res.render('index', {title: 'Platzigram - Signin'});
});

app.listen(80, function (err) {
  if (err) {
    return console.log('Hubo un error'), process.exit(1);
  } else {
    console.log('Platzigram echuchando en el puerto 80');
  }
});