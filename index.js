const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home'); 
  });

  app.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact' });
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
  