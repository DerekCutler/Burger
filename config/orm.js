// ==========================================
// DEPENDENCIES
// ==========================================
var connection = require('./connection.js');
// ==========================================

// ==========================================
// EXPORT PARAMETERS
// ==========================================
module.exports = {
    selectAll    : selectAll,
    selectOne    : selectOne,
    updateOne    : updateOne
};
// ==========================================

// ==========================================
// EXPORT FUNCTIONS
// ==========================================
function selectAll(table, callback) {
    var query = 'SELECT * FROM ' + table;
    connection.query(query, function(error, data) {
        if (error) throw error;
        callback(date);
    });
}


function selectOne(table, id, callback) {
    var query = 'SELECT * FROM ' + table + ' WHERE id = ?';
    connection.query(query, [id], function(error, data) {
        if (error) throw error;
        callback(data);
    });
}


function updateOne(table, column, value, id, callback) {
    var query = 'UPDATE ' + table + ' SET ' + column + ' = ? WHERE id = ?';
    connection.query(query, [value, id], function(error, data) {
        if (error) throw error;
        callback();
    });
}
// ==========================================