import { OmdbService, OmdbSearch } from "../services/omdbService";

interface mainCtrlScope extends ng.IScope {
    msg: string;
    filmes: [OmdbSearch]
    umfilme: OmdbSearch
};

export default class MainCtrl {

    constructor(private $scope: mainCtrlScope,private omdbService: OmdbService) {
        $scope.msg = omdbService.getMessage();        

        this.CarregarTela();
    }

    private CarregarTela(){
        this.omdbService.getFilmes('batman').then((respostaServidor) => {            
            this.$scope.filmes = respostaServidor.data.Search;
            this.$scope.umfilme = this.FiltrarLego(this.$scope.filmes);                
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