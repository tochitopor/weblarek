import './scss/styles.scss';

import {Buyer} from './components/models/Buyer';
import {Cart} from './components/models/Cart';
import {ProductCatalog} from './components/models/ProductCatalog';
import {ClientApi} from './components/services/ClientApi';
import {Api} from './components/base/Api';

import {apiProducts} from './utils/data';
import {initProducts} from './utils/data';

import {IProduct} from './types/index.ts'
import {TGetResponse} from './types/index.ts'
import {TPostResponse} from './types/index.ts'
import {TPostRequest} from './types/index.ts'
import { Header } from './components/views/Header.ts';
import { EventEmitter } from './components/base/Events.ts';
import { cloneTemplate, ensureElement } from './utils/utils.ts';
import { Gallery } from './components/views/Gallery.ts';
import { CatalogCard } from './components/views/CatalogCard.ts';
import { CDN_URL } from './utils/constants.ts';


const BASE_URL = import.meta.env.VITE_API_ORIGIN;
const broker = new EventEmitter();

const clientApi: ClientApi = new ClientApi(new Api(BASE_URL));
const data: TGetResponse = await clientApi.getData();
const productCatalog = new ProductCatalog(data.items, null);

//--Header-- 
const headerContainer = ensureElement<HTMLElement>('.header', document.body);
const header = new Header(broker, headerContainer);
const test = {counterElement: 3};
header.render(test);

//--Gallery + CatalogCard--
const catalogCardTemplate  = document.getElementById('card-catalog');
const gallery = new Gallery(document.body);
console.log('Проверка создания объекта ProductCatalog: ', JSON.stringify(productCatalog.productsList, null, 2));
const CatalogCartArray = productCatalog.productsList.map(item => {
    const catalogCardContainer = cloneTemplate<HTMLElement>(catalogCardTemplate as HTMLTemplateElement);
    const catalogCard = new CatalogCard(catalogCardContainer);
    
    return catalogCard.render(item);catalogCard;
});
console.log(CatalogCartArray);
gallery.setCards(CatalogCartArray);

//----------ProductCatalog----------
// console.log('//----------ProductCatalog----------');

// const productCatalog = new ProductCatalog(initProducts, null);
// console.log('Проверка создания объекта ProductCatalog: ', JSON.stringify(productCatalog, null, 2));

// console.log('Проверка получения списка товаров: ', JSON.stringify(productCatalog.productsList, null, 2));

// productCatalog.productsList = apiProducts.items;
// console.log('Проверка изменения списка товаров: ', JSON.stringify(productCatalog.productsList, null, 2));

// console.log('Успешный поиск товара по id: ', productCatalog.getProductByID('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
// console.log('Не успешный поиск товара по id: ', productCatalog.getProductByID('124'));

// console.log('Проверки получения NULL фокус карточки: ', productCatalog.focusCard);

// productCatalog.focusCard = initProducts[0];
// console.log('Проверки установки фокус карточки: ', productCatalog.focusCard);

//----------Buyer----------
console.log('//----------Buyer----------');

const buyer = new Buyer();
console.log('Проверка создания объекта Buyer: ', JSON.stringify(buyer, null, 2));

console.log('Проверка получения способа оптлаты: ', buyer.payment);

buyer.payment = 'cash';
console.log('Проверка изменения способа оптлаты: ', buyer.payment);

console.log('Проверка получения адреса: ', buyer.address);

buyer.address = 'Марс';
console.log('Проверка изменения адреса: ', buyer.address);

console.log('Проверка получения телефона: ', buyer.phone);

buyer.phone = '555 55 55';
console.log('Проверка изменения телефона: ', buyer.phone);

console.log('Проверка получения електронной почты: ', buyer.email);

buyer.email = 'ganja@mail.ru';
console.log('Проверка изменения електронной почты: ', buyer.email);

console.log('Проверка валидности данных о пользователе. Все поля валидные: ', buyer.validation());

buyer.payment = '';
buyer.phone = '';
console.log('Проверка валидности данных о пользователе. Телефон и Способ оплаты не валидные: ', buyer.validation());

buyer.cleanBuyerData();
console.log('Проверка очистки данных о пользователе: ', JSON.stringify(buyer, null, 2));

//----------Cart----------
console.log('//----------Cart----------');

const cart = new Cart();
console.log('Проверка создания объекта Cart: ', JSON.stringify(cart, null, 2));

console.log('Проверка получения списка выбранных товаров: ', JSON.stringify(cart.productsList, null, 2));

cart.addProduct(apiProducts.items[0]);
cart.addProduct(apiProducts.items[1]);
console.log('Проверка добавления товаров в корзину: ', JSON.stringify(cart.productsList, null, 2));

console.log('Проверка расчета стоимости корзины: ', cart.getTotalCartPrice());

console.log('Проверка получения количества товаров в корзине: ', cart.getProductCountInCart());

cart.discardProduct(apiProducts.items[1]);
console.log('Проверка удаления товара из корзины: ', JSON.stringify(cart.productsList, null, 2));

cart.discardProduct(apiProducts.items[3]);
console.log('Проверка удаления отсутствующего в корзине товара: ', JSON.stringify(cart.productsList, null, 2));

console.log('Успешный поиск товара по id: ', cart.isProductInCartById('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
console.log('Не успешный поиск товара по id: ', cart.isProductInCartById('854cef69-976d-4c2a-a18c-2aa45046c390'));

cart.cleanCart()
console.log('Проверка очистка корзины: ', JSON.stringify(cart.productsList, null, 2));

// //----------тест get метода объекта ClientApi ----------
// const clientApi: ClientApi = new ClientApi(new Api(BASE_URL));

// async function getRemoteCatalog() {
//     try {
//         const data: TGetResponse = await clientApi.getData();
//         const productList: IProduct[] = data.items;
//         console.log('каталог с сервера: ', JSON.stringify(productList, null, 2));
//     }
//     catch(error){
//         console.log('неудалось получить каталог с сервера', error);
//     }
// }

// getRemoteCatalog();

// //----------тест set метода объекта ClientApi ----------
// const buyer2 = new Buyer();
// buyer2.payment = 'cash';
// buyer2.address = 'Земля';
// buyer2.phone = '555 55 55';
// buyer2.email = 'ganja@mail.ru';

// const cart2 = new Cart();
// cart2.addProduct(apiProducts.items[0]);
// cart2.addProduct(apiProducts.items[1]);

// const request: TPostRequest = ({
//     payment: buyer2.payment,
//     email: buyer2.email,
//     phone: buyer2.phone,
//     address: buyer2.address,
//     total: cart2.getTotalCartPrice(),
//     items: [
//         apiProducts.items[0].id,
//         apiProducts.items[1].id
//     ]
// })

// async function setDataToServer() {
//     try {
//         const postResponse: TPostResponse = await clientApi.setData(request);
//         console.log('ответ сервера на POST запрос: ', JSON.stringify(postResponse, null, 2));
//     }
//     catch(error){
//         console.log('неудалось отправить данные на сервер', error);
//     }
// }

// setDataToServer();
