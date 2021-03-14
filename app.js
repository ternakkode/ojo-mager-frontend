require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const indexRoutes = require('./routes/index');
const programsRoutes = require('./routes/programs');
const usersRoutes = require('./routes/users');
const articlesRoute = require('./routes/articles');
const errorController = require('./controllers/errorPage/errorPage');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

<<<<<<< HEAD
app.use(indexRoutes);
=======
app.get('/', (req, res) => {
    res.render('index')
})
>>>>>>> development
app.use(usersRoutes);
app.use(programsRoutes);
app.use(articlesRoute);
app.use(errorController.errorPage);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`sever listening to http://localhost:${PORT}`);
});
