import { OmdbService, OmdbSearch } from "../services/omdbService";

interface mainCtrlScope extends ng.IScope {
    msg: string;
    filmes: [OmdbSearch];
    umfilme: OmdbSearch;
};

export default class MainCtrl implements ng.IController {

    static $inject = [
        '$scope',
        "omdbService",
    ];

    private $scope: mainCtrlScope;

    constructor($scope: mainCtrlScope, private omdbService: OmdbService) {
        this.$scope = $scope;
        this.$scope.msg = '';

        this.omdbService.testAsync();
    }

    public submitForm(): void {
        this.CarregarTela(this.$scope.msg);
    }

    private CarregarTela(texto: string): void {
        this.omdbService.getFilmes(texto).then((respostaServidor) => {
            this.$scope.filmes = respostaServidor.data.Search;
            this.$scope.umfilme = this.FiltrarLego(this.$scope.filmes);
        });
    }

    public FiltrarLego(lFilmes: [OmdbSearch]): OmdbSearch {

        var filme: OmdbSearch;

        if (!lFilmes || lFilmes.length <= 0) {
            return filme;
        }

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

    public static Temp(): string {
        return `
        <form class="form-inline" ng-submit="vm.submitForm()" >
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Filme</label>
          <input type="text" ng-model="msg" class="form-control-plaintext" placeholder="filme" id="staticEmail2" value="">
        </div>        
        <button type="submit" class="btn btn-primary mb-2">Buscar</button>
      </form>

        <div class="list-group">
            <div ng-repeat="filme in filmes" class="list-group-item list-group-item-action">
                <img ng-src="{{filme.Poster}}" height="100" alt="" />
                <label for="" ng-bind="filme.Title"></label>

            </div>
            <div class="list-group-item list-group-item-dark" ng-if="!filmes || filmes.length == 0">
                Nenhum resultado encontrado
            </div>
        </div>
    `;
    }
}


