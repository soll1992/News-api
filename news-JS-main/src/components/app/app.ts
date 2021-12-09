import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        (document.querySelector('.nav-buttons') as HTMLElement).addEventListener('click', (e) => {
            this.controller.getSources((data) => this.view.drawSources(e, data));
        });
        this.controller.getSources((data) => this.view.drawButtons(data));
    }
}

export default App;
