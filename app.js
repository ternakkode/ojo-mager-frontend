const path = require('path');

// third pt module
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

// template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// routes
const artikelRoutes = require('./routes/artikel');
const usersRoutes = require('./routes/users');
const programRoutes = require('./routes/programLatihan');

app.use(usersRoutes);
app.use(artikelRoutes);
app.use(programRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,  () => {
    console.log(`sever listening to http://localhost:${PORT}`);
});
