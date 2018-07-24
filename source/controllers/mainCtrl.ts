import { OmdbService, OmdbSearch } from "../services/omdbService";

export interface mainCtrlScope extends ng.IScope {
    msg: string;
    filmes: [OmdbSearch]
    umfilme: OmdbSearch
};

export default class MainCtrl {

    constructor($scope: mainCtrlScope,  omdbService: OmdbService) {
        $scope.msg = omdbService.getMessage();        

        omdbService.getFilmes('batman').then((respostaServidor) => {
            $scope.filmes = respostaServidor.data.Search;

            $scope.umfilme = this.FiltrarLego($scope.filmes);                
        });        
    }

    public FiltrarLego(lFilmes: [OmdbSearch]): OmdbSearch {

        var filme: OmdbSearch;

        lFilmes.forEach(element => {
            if (element.Title == "The Lego Batman Movie") {
                filme = element;
            }
        });

        return filme;
    }

    public getMessage22(): string {
        return "Welcome! I am inside a service. today my friendss";
    }
}



    // static $inject = [
    //     '$scope',
    //     "$http",
    // ];