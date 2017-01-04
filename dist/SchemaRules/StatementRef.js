"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    objectType: rulr_1.optional(Factory_1.string),
    id: rulr_1.required(Factory_1.uuid),
});
