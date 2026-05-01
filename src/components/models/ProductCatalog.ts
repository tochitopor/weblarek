import {IProduct} from '../../types/index.ts'

export class ProductCatalog {
    private _productsList: IProduct[];
    private _focusCard: IProduct | null;

    constructor(productsList: IProduct[], focusCard: IProduct | null = null) {
        this._productsList = productsList;
        this._focusCard = focusCard;
    }

    get productsList(): IProduct[] {
        return this._productsList;
    }

    set productsList(productsList: IProduct[]) {
        this._productsList = productsList;
    }

    getProductByID(id: string): IProduct | null {
        let result: IProduct | null = null;

        this._productsList.some( item => {
            if( item.id === id)
                result = item;
                return true;
        });

        return result;
    }

    get focusCard(): IProduct | null {
        return this._focusCard;
    }

    set focusCard(product: IProduct) {
        this._focusCard = product;
    }
}