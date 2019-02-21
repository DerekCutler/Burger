// ==========================================
// IMPORT THE OBJECT-RELATIONAL MAPPING
// ==========================================
var orm = require('../config/orm.js');
// ==========================================


// ==========================================
// EXPORT THE OBJECT-RELATIONAL MAPPING
// ==========================================
module.exports = {
    allBurgers   : burgers,
    create       : create,
    singleBurger : singleBurger,
    update       : update
};
// ==========================================


// ==========================================
// GET ALL BURGERS
// ==========================================
function burgers(callBack) {
    var object = {};
    uneatenBurgers(function(data) {
        object.uneaten = data;
        eatenBurgers(function(data) {
            object.eaten = data;
            callBack(object);
        });
    });
}
// ==========================================


// ==========================================
// QUERY DATABASE FOR UNEATEN BURGERS
// ==========================================
function uneatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'false', function(data) {
        callBack(data);
    });
}
// ==========================================


// ==========================================
// QUERY DATABASE FOR EATEN BURGERS
// ==========================================
function eatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'true', function(data) {
        callBack(data);
    });
}
// ==========================================


// ==========================================
// QUERY DATABASE FOR SINGLE BURGER
// ==========================================
function singleBurger(burger, callBack) {
    orm.selectOne('burgers', burger, function(data) {
        callBack(data);
    });
}
// ==========================================


// ==========================================
// QUERY DATABASE TO CREATE A BURGER
// ==========================================
function create(burger, callBack) {
    orm.insertOne('burgers', 'burger_name', burger, function() {
        callBack();
    });
}
// ==========================================


// ==========================================
// QUERY DATABASE TO UPDATE A BURGER
// ==========================================
function update(burger, callBack) {
    orm.updateOne('burgers', 'devoured', true, burger, function() {
        callBack();
    });
}
// ==========================================