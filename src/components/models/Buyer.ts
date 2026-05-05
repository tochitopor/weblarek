export class Buyer {
    private _payment: 'card' | 'cash' | '';
    private _address: string;
    private _phone: string;
    private _email: string;
    
    constructor(payment: 'card' | 'cash' | '', address: string, phone: string, email: string) {
        this._payment = payment;
        this._address = address;
        this._phone = phone;
        this._email = email;
    }
    
    get payment(): string {
        return this._payment;
    }

    set payment(val: 'card' | 'cash' | '') {
        this._payment = val;
    }

    get address(): string {
        return this._address;
    }

    set address(val: string) {
        this._address = val;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(val: string) {
        this._phone = val;
    }

    get email(): string {
        return this._email;
    }

    set email(val: string) {
        this._email = val;
    }

    cleanBuyerData(): void {
            this._payment = '';
            this._address = '';
            this._phone = '';
            this._email = '';
    }

    validation(): { [key: string]: string } {
        let result : { [key: string]: string } = {};

        if( this._payment === '') {
            result['payment'] = 'Не выбран вид оплаты';
        }

        if(  this._address === '') {
            result['address'] = 'Укажите адрес';
        }

        if( this._phone === '') {
            result['phone'] = 'Укажите телефон';
        }

        if( this._email === '') {
            result['email'] = 'Укажите электронную почту';
        }

        return result;
    }
}