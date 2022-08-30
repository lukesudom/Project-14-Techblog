const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const sequelizeStore = require('connection-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitalized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

//fix up grabbing the port

app.listen(PORT, () => {
    console.log('App listening on port ${PORT}!');
    sequelize.sync({ force: false });
});