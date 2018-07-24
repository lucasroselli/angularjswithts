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

    constructor(private $http: ng.IHttpService) {

    }

    public getMessage(): string {
        return "Mensagem do serviço OmdbService";
    }

    public getFilmes(filtro: string): angular.IPromise<IHttpResponse<OmdbResponseAll>> {
        return this.$http.get(`http://www.omdbapi.com/?s=${filtro}&apikey=18693fd6`);        
    }

}