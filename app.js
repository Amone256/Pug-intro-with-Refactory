const express = require('express');

// initialise express into the app
const app = express();

//load views engine.

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
    
	res.render('index.pug', {
        title:'My friends'
    });
});

// New Route.

app.get('/articles/add', (req, res) => {
	res.render('add_article', {
        title:'Add friends'
    });
});

// server listening on port 8080.
const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Application is listening on Port ${PORT}!`);
});