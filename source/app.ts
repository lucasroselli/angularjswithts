import * as angular from 'angular'
import * as $ from 'jquery'
//app
let app = angular.module('appT', []);


app.config(function () {
    //alert('sdf');
});


import {OmdbService} from './services/omdbService'
app.service('omdbService', OmdbService)

import mainCtrl from './controllers/mainCtrl'
app.controller('mainCtrl', mainCtrl);


$(document).ready(function () {
    //alert('lucas');
});