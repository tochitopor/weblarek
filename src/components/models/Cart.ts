import {IProduct} from '../../types/index.ts'

export class Cart {
    private _productsList: IProduct[];

    constructor() {
        this._productsList = []
    }

    get productsList(): IProduct[] {
        return this._productsList;
    }

    addProduct(product: IProduct): void {
        this._productsList.push(product);
    }

    discardProduct(product: IProduct): void {
        let index = this._productsList.indexOf(product); 
        this._productsList.splice(index, 1);
    }

    cleanCart(): void {
        this._productsList = []
    }

    getTotalCartPrice(): number {
        let result: number = 0;

        this._productsList.forEach( item => {
            if(item.price != null) {
                result += item.price;
            }
        });
        return result;
    }

    getProductCountInCart(): number {
        return this._productsList.length;
    }

    isProductInCartById(id: string): boolean {
        let result: boolean = false;

        this._productsList.forEach( item => {
            if(item.id === id) {
                result = true;
            }
        });

        return result;
    }
}