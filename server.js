const express = require("express");
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

const connectDB = require('./config/db');
// Import all the routes files here
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const contactsRoute = require('./routes/contacts');

const app = express();

// Connect to MongoDB here
connectDB();

app.use(logger('dev'));

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'),{flags: 'a'})

app.use(logger('combined', {stream: accessLogStream}));

app.get('/', (req, res)=> res.send('my contact manager app'));

// Define all routes here
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/contacts', contactsRoute);
app.use('/api/v1/auth', authRoute);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
