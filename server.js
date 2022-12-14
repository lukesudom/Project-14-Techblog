//Requirements
const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const app = express();
const models = require('./models');
const PORT = process.env.PORT || 3001;
const sequelizeConnection = require('./config/sequelizeConnection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelizeConnection
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


//Create connection

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelizeConnection.sync({ force: true }).then(() => require('./seeds'))
});