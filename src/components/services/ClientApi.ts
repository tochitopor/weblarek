import {IProduct} from '../../types/index.ts'
import {TGetResponse} from '../../types/index.ts'
import {TPostResponse} from '../../types/index.ts'
import {Api} from '../base/Api.ts'

export class ClientApi {
    private _api: Api;

    constructor(api: Api)  {
        this._api = api;
    }

    async getData(): Promise<IProduct[]>{
        const response: TGetResponse = await this._api.get<TGetResponse>('product');
        return response.items
    }

    async setData(data: object): Promise<TPostResponse> {
        const response: TPostResponse = 
            await this._api.post<TPostResponse>('order', data);
        return response;
    }
}