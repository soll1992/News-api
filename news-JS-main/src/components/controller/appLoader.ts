import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '09a5744a5a034e69a7514ba1dd4afce5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
