const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8800;
app.use(express.urlencoded());
app.use(cookieParser());
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
//mono jaise refres k baad bhi login rahe
const MongoStore = require('connect-mongo');

app.set('view engine', 'ejs');
app.set('views', './views');

//passport midleware
app.use(session({
    name: 'Major Project',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passportLocal.setAuthenticatedUser);
app.use('/', require('./routes'));
// app.use('/', require('./routes/index'))

app.listen(port, function (err) {
    if (err)
        console.log("Error in running server");
    console.log("Server is running");
});
