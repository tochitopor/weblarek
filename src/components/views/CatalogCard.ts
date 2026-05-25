import { IProduct } from "../../types";
import { ensureElement } from "../../utils/utils";
import { BaseCard } from "../base/BaseCard";


export class CatalogCard extends BaseCard {
    //protected catalogCardButton: HTMLButtonElement;
    protected _image: HTMLImageElement;
    protected _category: HTMLElement;

    constructor(container: HTMLElement) {
        super(container);

        //this.catalogCardButton = ensureElement<HTMLButtonElement>('.gallery__item', this.container);
        this._image = ensureElement<HTMLImageElement>('.card__image', this.container);
        this._category = ensureElement<HTMLElement>('.card__category', this.container);
    }

    set image(val: string) {
        this._image.src = String(val);
    }

    set category(val: string) {
        this._category.textContent = String(val);
    }

}
