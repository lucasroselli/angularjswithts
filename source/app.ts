import * as angular from 'angular'
import * as $ from 'jquery'
//app
let app = angular.module('appT', []);


app.config(function () {
    //alert('sdf');
});

import mainCtrl from './controllers/mainCtrl'
app.controller('mainCtrl', mainCtrl);

import omdbService from './services/omdbService'

app.service('omdb', omdbService)

$(document).ready(function () {
    //alert('lucas');
});