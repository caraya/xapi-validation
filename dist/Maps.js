"use strict";
var Factory_1 = require("./Factory");
var map = function (keyRule, valueRule) { return function (data, path) {
    var keys = Object.keys(data);
    return keys.reduce(function (errors, key) {
        return errors.concat(keyRule(key, path)).concat(valueRule(data[key], path.concat(key)));
    }, []);
}; };
exports.extensions = map(Factory_1.iri, Factory_1.any);
exports.languageMap = map(Factory_1.language, Factory_1.string);
