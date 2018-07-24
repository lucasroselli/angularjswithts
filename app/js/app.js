(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./controllers/mainCtrl":2,"angular":"angular","jquery":"jquery"}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class OmdbResponseAll {
    constructor(totalResults, Search) {
        this.totalResults = totalResults;
        this.Search = Search;
    }
}
class OmdbSearch {
}
class MainCtrl {
    constructor($scope, $http) {
        $scope.msg = 'jonas';
        $http.get('http://www.omdbapi.com/?i=tt2975590&apikey=18693fd6').then(function (data) {
            $scope.msg = data.data.Title;
            console.log(data.data.Title);
        });
        $http.get('http://www.omdbapi.com/?s=batman&apikey=18693fd6').then(function (response) {
            console.log(response.data.totalResults);
            console.log(response.data.Search);
            $scope.filmes = response.data.Search;
        });
    }
    // mensagem(nome: string) : number{
    //     return nome.length;
    // }
    getMessage() {
        return "Welcome! I am inside a service. today my friendss";
    }
}
exports.default = MainCtrl;

},{}]},{},[1]);
