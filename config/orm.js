const connection = require("./connections");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; I++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") > 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, res) {
        if (err) {
            throw err;
        }
    
        cb(res);  
    });
    },

    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + tableInput + "WHERE" + condition;
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;