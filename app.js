const path = require('path');

// third pt module
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

// template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// routes
const loginRoutes = require('./routes/login');
const registrasiRoutes = require('./routes/register');
const artikelRoutes = require('./routes/artikel');
const programRoutes = require('./routes/programLatihan');


app.use(loginRoutes);
app.use(registrasiRoutes);
app.use(artikelRoutes);
app.use(programRoutes);


const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})