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
