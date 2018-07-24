"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angular = require("angular");
const $ = require("jquery");
//app
let app = angular.module('appT', []);
app.config(function () {
    //alert('sdf');
});
const mainCtrl_1 = require("./controllers/mainCtrl");
app.controller('mainCtrl', mainCtrl_1.default);
$(document).ready(function () {
    //alert('lucas');
});
