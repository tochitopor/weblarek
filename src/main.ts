import './scss/styles.scss';

//import {Buyer} from './components/models/Buyer';
//import {Cart} from './components/models/Cart';
import {ProductCatalog} from './components/models/ProductCatalog';

import {apiProducts} from './utils/data';
import {initProducts} from './utils/data';

//----------ProductCatalog----------
let pc = new ProductCatalog(initProducts, null);
console.log('Проверка создания объекта ProductCatalog: ', JSON.stringify(pc));

console.log('Проверка получения списка товаров: ', JSON.stringify(pc.productsList));

pc.productsList = apiProducts.items;
console.log('Проверка изменения списка товаров: ', JSON.stringify(pc.productsList));

console.log('Успешный поиск товара по id: ', pc.getProductByID('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
console.log('Не успешный поиск товара по id: ', pc.getProductByID('124'));

console.log('Проверки получения NULL фокус карточки: ', pc.focusCard);

pc.focusCard = initProducts[0];
console.log('Проверки установки фокус карточки: ', pc.focusCard);

//----------Buyer----------
// let buyer = new Buyer('card', 'Земля', '777 77 77', 'ganja@yandex.ru');

//----------Cart----------
// let cart = new Cart();
