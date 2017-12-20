const express = require('express');
const path = require('path');

const app = express();

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'It works!' });
});

app.listen(3000, () => {
  console.log('Express is running...');
});
