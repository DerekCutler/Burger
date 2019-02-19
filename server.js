// ==========================================
// DEPENDENCIES
// ==========================================
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// ==========================================

// ==========================================
// SERVER SETUP
// ==========================================
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server listening on: http://localhost:" + PORT);
// ==========================================

// ==========================================
// HANDLEBARS SETUP
// ==========================================
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// ==========================================

// ==========================================
// ROUTES SETUP
// ==========================================
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

require('./controllers/burger_controller.js')(app);
// ==========================================