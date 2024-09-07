const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.post('/submit', (req, res) => {
  res.send('You submitted a POST request!');
});


const port = 3000;
app.listen(port, () => {
  console.log('Server is running on port ${port}');
});