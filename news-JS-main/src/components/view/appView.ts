import News from './news/news';
import Sources from './sources/sources';
import { NewsI, SourceI, SourceT } from '../options';

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsI | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(e: Event, data: SourceI | undefined) {
        const values: Array<SourceT> = [];
        const target = e.target as HTMLElement;
        data?.sources.forEach((item) => {
            if ((item.name as string).charAt(0) == (target.textContent as string).trim()) {
                values.push(item);
            }
        });
        this.sources.draw(values);
    }

    drawButtons(data: SourceI | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.drawButton(values);
    }
}

export default AppView;
