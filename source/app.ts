import * as angular from 'angular'
import * as angularRoute from 'angular-route'
import * as $ from 'jquery'
//app
let app = angular.module('appT', ['ngRoute']);


import mainCtrl from './controllers/mainCtrl'
import SobreCtrl from './controllers/sobreCtrl'
import { OmdbService } from './services/omdbService'

app.service('omdbService', OmdbService)
app.controller('mainCtrl', mainCtrl);
app.controller('sobreCtrl', SobreCtrl);

app.config(['$routeProvider',function ($routeProvider: ng.route.IRouteProvider) {
    var sdfds =angularRoute;

    $routeProvider
    .when('/', {
        template: mainCtrl.Temp(),
        controller: 'mainCtrl',
        controllerAs: 'vm'
    })
    .when('/sobre', {
        template: SobreCtrl.Temp(),
        controller: 'sobreCtrl'
    })
    .otherwise('/');
}]);

$(document).ready(function () {
    //alert('lucas');
});