// importar
require('dotenv').config();
var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    forceSSL = require('express-force-ssl'),
    express = require('express'),
    mysql = require('mysql'),
    methods = require('methods'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 9000;

var environment = process.env.NODE_ENV;
/* var isProduction = process.env.NODE_ENV === 'production'; */


// instanciar
var app = express();
app.use(cors());

// Express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());

// ruteo
app.use(session({ secret: 'shoppingPocket', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));
/* if (!isProduction) {
  app.use(errorhandler());
}
 */

require('./models/User');
require('./config/passport');

app.use(require('./routes'));


switch (environment) {
  case 'build':
    console.log('** BUILD **');
    app.use(express.static('./'));
    console.log('WARNING: RUNING SERVER WITH HTTPS');
    
    var options = {
      key: fs.readFileSync('/etc/letsencrypt/live/shoppingpocket.tk/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/shoppingpocket.tk/cert.pem'),
      ca: fs.readFileSync('/etc/letsencrypt/live/shoppingpocket.tk/chain.pem')
    };

    https.createServer(options, app).listen(port);
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./'));
    app.listen(port, function() {
      console.log('Express escuchando puerto ' + port);
      console.log('env = ' + app.get('env') +
      '\n__dirname = ' + __dirname +
      '\nprocess.cwd = ' + process.cwd());
    });
    break;
}
