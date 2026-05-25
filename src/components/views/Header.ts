import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/Events";

interface IHeader {
    counterElement: number
}

export class Header extends Component<IHeader> {
    protected _counterElement: HTMLElement;
    protected cartButton: HTMLButtonElement;
    protected events: IEvents;

    constructor(events: IEvents, container: HTMLElement) {
        super(container);

        this._counterElement = ensureElement<HTMLElement>('.header__basket-counter', this.container);
        this.cartButton = ensureElement<HTMLButtonElement>('.header__basket', this.container);
        this.events = events;

        this.cartButton.addEventListener('click', () => {
            this.events.emit('cart:open');
        });
    }

    set counterElement(val: number) {
        this._counterElement.textContent = String(val);
    }
}