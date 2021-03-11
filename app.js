import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

import usersRoutes from './routes/users.js'

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(cookieParser());

app.use(usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`sever listening to http://localhost:${PORT}`);
});
