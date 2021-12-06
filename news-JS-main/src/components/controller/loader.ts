class Loader {
    baseLink: string
    options: object
    constructor(baseLink: string, options: object) {
      this.baseLink = baseLink;
      this.options = options;
    }  

    getResp(
        { endpoint, options = {} }: {endpoint: string, options: object},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }


    makeUrl(options : object, endpoint : string) {
        type TUrlOptions = {
            [prop: string]: string;
        }
        const urlOptions : TUrlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        console.log(this.baseLink)

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: object, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
