import News from './news/news';
import Sources from './sources/sources';
import { NewsI, SourceI, SourceT } from '../options';

export class AppView {
    private news: News;

    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsI | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(e: Event, data: SourceI | undefined) {
        const values: Array<SourceT> = [];
        const target = e.target as HTMLElement;
        data?.sources.forEach((item) => {
            if ((item.name as string).charAt(0) == (target.textContent as string).trim()) {
                values.push(item);
            }
        });
        this.sources.draw(values);
    }

    public drawButtons(data: SourceI | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.drawButton(values);
    }
}

export default AppView;
