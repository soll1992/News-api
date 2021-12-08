import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsI, SourceI } from '../options';

class App {
    controller: AppController;

    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: NewsI) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourceI) => this.view.drawSources(data));
    }
}

export default App;
