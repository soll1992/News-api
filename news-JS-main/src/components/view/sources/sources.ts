import './sources.css';
import { SourceT } from '../../options';

class Sources {
    public draw(data: Array<SourceT>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        (document.querySelector('.sources') as HTMLElement).innerHTML = '';
        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }

    public drawButton(data: Array<SourceT>) {
        const fragment = document.createDocumentFragment();
        const buttonItemTemp = document.querySelector('#buttonItemTemp') as HTMLTemplateElement;
        const buttons: Set<string> = new Set();

        data.forEach((item) => {
            buttons.add(item.name.charAt(0));
        });

        buttons.forEach((item) => {
            const buttonClone = buttonItemTemp.content.cloneNode(true) as HTMLElement;

            (buttonClone.querySelector('.button__item-name') as HTMLElement).textContent = item;

            fragment.append(buttonClone);
        });

        (document.querySelector('.nav-buttons') as HTMLElement).append(fragment);
    }
}

export default Sources;
