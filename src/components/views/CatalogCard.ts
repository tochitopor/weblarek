import { categoryMap, CDN_URL } from "../../utils/constants";
import { ensureElement } from "../../utils/utils";
import { BaseCard } from "../base/BaseCard";


export class CatalogCard extends BaseCard {
    protected _image: HTMLImageElement;
    protected _category: HTMLElement;

    constructor(container: HTMLElement, handle: (event: MouseEvent) => void) {
        super(container);

        this._image = ensureElement<HTMLImageElement>('.card__image', this.container);
        this._category = ensureElement<HTMLElement>('.card__category', this.container);
        this.container.addEventListener('click', handle);
    }

    set image(val: string) {
        this._image.src = String(CDN_URL + val.replace('.svg', '.png'));
    }

    set category(val: string) {
        this._category.textContent = val;
        this._category.classList.remove('card__category_soft');
        this._category.classList.add(categoryMap[val as keyof typeof categoryMap]);
    }

}
