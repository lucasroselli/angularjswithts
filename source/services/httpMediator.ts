export default class HttpMediator implements ng.IHttpInterceptor {
    constructor(private $q: ng.IQService) {
    }
    request = (config: ng.IRequestConfig): ng.IRequestConfig => {
        console.info('Request:', config);
        document.getElementById('global_loading').style.display = 'block';
        return config;
    };
    
    response = <T>(response: ng.IHttpPromiseCallbackArg<T>): ng.IHttpResponse<T> => {
        console.info('Response:', response);
        
        document.getElementById('global_loading').style.display = 'none';

        return response;
    };

    requestError = (rejection: any): ng.IRequestConfig => {

        console.error('deu ruim');

        return null;
    }
}