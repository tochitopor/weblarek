export class Buyer {
    private _payment: 'card' | 'cash' | '';
    private _adress: string;
    private _phone: string;
    private _email: string;
    
    constructor(payment: 'card' | 'cash' | '', adress: string, phone: string, email: string) {
        this._payment = payment;
        this._adress = adress;
        this._phone = phone;
        this._email = email;
    }
    
    get payment(): string {
        return this._payment;
    }

    set payment(val: 'card' | 'cash' | '') {
        this._payment = val;
    }

    get adress(): string {
        return this._adress;
    }

    set adress(val: string) {
        this._adress = val;
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
            this._adress = '';
            this._phone = '';
            this._email = '';
    }

    validation(): { [key: string]: string } {
        let result : { [key: string]: string } = {};

        if( this._payment = '') {
            result['payment'] = 'Не выбран вид оплаты';
        }

        if(  this._adress = '') {
            result['adress'] = 'Укажите адрес';
        }

        if( this._phone = '') {
            result['phone'] = 'Укажите телефон';
        }

        if( this._email = '') {
            result['email'] = 'Укажите электронную почту';
        }

        return result;
    }
    
    // валидация способа оплаты, адреса, телефона и электронной почты пользоватля. 
    // Метод возвращает объект с полями соответствующими полям класса не прошедшим валидацию. 
    // В значении ключа указанна причина инвалидации. Если поля нет в возвращаемом объекте, 
    // значит оно валидное.
}