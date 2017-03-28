var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user: {
        username: 'Julio',
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/12400842_10153286774571319_2541176558973363503_n.jpg?oh=8fcd3f41d33243f569bbaf5ed597c585&oe=5956E219" 
      },
      url: 'office.jpeg',
      likes: 1024,
      liked: false,
      createAt: new Date()
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
  empty(main).appendChild(template(pictures));
});