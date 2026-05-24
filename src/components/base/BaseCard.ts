import { IProduct } from "../../types";
import { ensureElement } from "../../utils/utils";
import { Component } from "./Component";

export class BaseCard extends Component<IProduct> {
    protected priceElement: HTMLElement;
    protected titleElement: HTMLElement;

    constructor(container: HTMLElement) {
        super(container);

        this.priceElement = ensureElement<HTMLElement>('card__price', this.container);
        this.titleElement = ensureElement<HTMLElement>('card__title', this.container);
    }

    set title(val: string) {
        this.titleElement.textContent = val;
    }

    set price(val: number | null) {
        if( val != null) {
            this.priceElement.textContent = String(val) + ' синапсов';
        }
        else
            this.priceElement.textContent = 'Бесценно';
    }
}