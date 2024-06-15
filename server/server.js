const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const yarnRouter = require('./routes/yarn_inventory.router');
const patternsRouter = require('./routes/patterns_inventory.router');
const projectRouter = require('./routes/project_tracking.router');

// Express Middleware
app.use(express.json());
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/yarn', yarnRouter);
app.use('/api/patterns', patternsRouter);
app.use('/api/projects', projectRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
