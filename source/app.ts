import * as angular from 'angular'
import * as angularRoute from 'angular-route'
import * as $ from 'jquery'
//app
let app = angular.module('appT', ['ngRoute']);


app.config(function ($routeProvider: ng.route.IRouteProvider) {


    var sdfds =angularRoute;

    $routeProvider
    .when('', {
        templateUrl: '<h2>dfsdfs</h2>',
        controller: 'mainCtrl'
    })
    .when('/sobre', {
        templateUrl: '<h2>sobre</h2>',
        controller: 'mainCtrl'
    })
    .otherwise('/')

    // //alert('sdf');
    // $routeProvider
    //     .when('/Book/:bookId', {
    //         templateUrl: 'book.html',
    //         controller: 'BookController'
    //     })
    //     .when('/Book/:bookId/ch/:chapterId', {
    //         templateUrl: 'chapter.html',
    //         controller: 'ChapterController'
    //     });

});


import { OmdbService } from './services/omdbService'
app.service('omdbService', OmdbService)

import mainCtrl from './controllers/mainCtrl'
app.controller('mainCtrl', mainCtrl);


$(document).ready(function () {
    //alert('lucas');
});