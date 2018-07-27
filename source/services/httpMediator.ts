export default class HttpMediator implements ng.IHttpInterceptor {
    constructor(private $q: ng.IQService) {
    }
    request = (config: ng.IRequestConfig): ng.IRequestConfig => {
        console.info('Request:', config);
        
        return config;
    };
    
    response = <T>(response: ng.IHttpPromiseCallbackArg<T>): ng.IHttpResponse<T> => {
        console.info('Response:', response);
        
        return response;
    };

    requestError = (rejection: any): ng.IRequestConfig => {

        console.error('deu ruim');

        return null;
    }
}