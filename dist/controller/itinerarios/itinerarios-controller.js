"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const getItinerarios_1 = __importDefault(require("./getItinerarios"));
const insertItinerarios_1 = __importDefault(require("./insertItinerarios"));
module.exports = {
    getItinerarios: getItinerarios_1.default,
    insertItinerarios: insertItinerarios_1.default
};
