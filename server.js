const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

//initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Import the custom helper methods
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


const sess = {
    secret: process.env.COOKIE,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:' + PORT);
    });
});