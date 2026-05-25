import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";

interface IGallery {
    gallery: HTMLElement;
}

export class Gallery extends Component<IGallery> {
    protected gallery: HTMLElement;

    constructor(container: HTMLElement) {
        super(container);

        this.gallery = ensureElement<HTMLElement>('.gallery', this.container);
    }

    setCards(elements: HTMLElement[]): void {
        this.gallery.replaceChildren(...elements);
    }
}