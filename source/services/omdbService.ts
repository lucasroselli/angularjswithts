import { IHttpResponse } from "angular";

export class OmdbResponseAll {
    public totalResults: number
    public Search: [OmdbSearch]
}

export class OmdbSearch {
    public Title: string
    public imdbID: number
    public Poster: string
}

export class OmdbService {

    constructor(private $http: ng.IHttpService, private $timeout: ng.ITimeoutService) {

    }

    async testAsync(): Promise<string> {
        var valor = await this.$timeout(2000)//.toPromise()
            .then(response => {
                return "Changed"
            });

        return valor;
    }

    public getMessage(): string {
        return "Bem vindo OmdbService";
    }

    public getFilmes(filtro: string): angular.IPromise<IHttpResponse<OmdbResponseAll>> {
        return this.$http.get(`http://www.omdbapi.com/?s=${filtro}&apikey=18693fd6`);
    }

}