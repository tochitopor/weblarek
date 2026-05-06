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

    // я переделал, но не согласен, что some не предназначен для перебора элементов массива
    getProductByID(id: string): IProduct | null {
        const result = this._productsList.find( item => item.id === id);

        // Если продукт не найден, .find() вернет undefined, поэтому добавил null
        return  result || null;
    }

    get focusCard(): IProduct | null {
        return this._focusCard;
    }

    set focusCard(product: IProduct) {
        this._focusCard = product;
    }
}