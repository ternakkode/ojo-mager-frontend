require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const programsRoutes = require('./routes/programs');
const usersRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(programsRoutes);
app.use(usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`sever listening to http://localhost:${PORT}`);
});
