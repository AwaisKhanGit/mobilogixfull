import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './db/mongoose'
connectDB()

const app = express();
const sessionMiddleware = require('./modules/session-middleware');
import passport from './strategies/user.strategy'

// Route includes
const userRouter = require('./routes/user.router');
const employeeRouter = require('./routes/employee.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/employee', employeeRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});