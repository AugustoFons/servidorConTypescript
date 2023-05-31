"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = 3000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send("<h4>Servidor ejecutandose con typescript</h4>");
});
app.listen(port, function () { return console.log("La aplicacion se esta ejecutando en http://localhost:".concat(port)); });
