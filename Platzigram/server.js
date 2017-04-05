var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Platzigram'
  });
});

app.get('/signup', function (req, res) {
  res.render('index', {
    title: 'Platzigram - Signup'
  });
});

app.get('/signin', function (req, res) {
  res.render('index', {
    title: 'Platzigram - Signin'
  });
});

app.get('/api/pictures', function (req, res) {
  var pictures = [
      {
        user: {
          username: 'Julio',
          avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/12400842_10153286774571319_2541176558973363503_n.jpg?oh=8fcd3f41d33243f569bbaf5ed597c585&oe=5956E219" 
        },
        url: 'office.jpeg',
        likes: 0,
        liked: false,
        createAt: new Date().getTime()
      },
      {
        user: {
          username: 'Julio',
          avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/12400842_10153286774571319_2541176558973363503_n.jpg?oh=8fcd3f41d33243f569bbaf5ed597c585&oe=5956E219" 
        },
        url: 'office.jpeg',
        likes: 2,
        liked: true,
        createAt: new Date().setDate(new Date().getDate() - 10)
      },
    ];
    setTimeout(
      function() {
        res.send(pictures);
      },
      2000);
});

app.listen(80, function (err) {
  if (err) {
    return console.log('Hubo un error'), process.exit(1);
  } else {
    console.log('Platzigram echuchando en el puerto 80');
  }
});