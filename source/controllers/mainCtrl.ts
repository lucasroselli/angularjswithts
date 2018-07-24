import { IHttpResponse } from "../../node_modules/@types/angular";

export interface mainCtrlScope extends ng.IScope {
    submitForm: () => void;
    myData: string;
};

class OmdbResponseAll {
    constructor(public totalResults: number,public Search: [OmdbSearch]) {

    }
}

class OmdbSearch{
    public Title: string
    public imdbID: number
    public Poster: string
}

export default class MainCtrl {

    constructor($scope: any, $http: ng.IHttpService) {
        $scope.msg = 'jonas';



        // $http.get('http://www.omdbapi.com/?i=tt2975590&apikey=18693fd6').then(function (data: IHttpResponse<OmdbSearch>) {

        //     $scope.msg = data.data.Title;
        //     console.log(data.data.Title);
        // });

        $http.get('http://www.omdbapi.com/?s=batman&apikey=18693fd6').then(function (response: IHttpResponse<OmdbResponseAll>) {

        
            console.log(response.data.totalResults);
            console.log(response.data.Search);

            $scope.filmes = response.data.Search;
        });
    }

    // mensagem(nome: string) : number{
    //     return nome.length;
    // }

    public getMessage(): string {
        return "Welcome! I am inside a service. today my friendss";
    }
}