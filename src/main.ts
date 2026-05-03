import './scss/styles.scss';

import {Buyer} from './components/models/Buyer';
import {Cart} from './components/models/Cart';
import {ProductCatalog} from './components/models/ProductCatalog';

import {apiProducts} from './utils/data';
import {initProducts} from './utils/data';

//----------ProductCatalog----------
console.log('//----------ProductCatalog----------');

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
console.log('//----------Buyer----------');

let buyer = new Buyer('card', 'Земля', '777 77 77', 'ganja@yandex.ru');
console.log('Проверка создания объекта Buyer: ', JSON.stringify(buyer));

console.log('Проверка получения способа оптлаты: ', buyer.payment);

buyer.payment = 'cash';
console.log('Проверка изменения способа оптлаты: ', buyer.payment);

console.log('Проверка получения адреса: ', buyer.adress);

buyer.adress = 'Марс';
console.log('Проверка изменения адреса: ', buyer.adress);

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
console.log('Проверка очистки данных о пользователе: ', JSON.stringify(buyer));

//----------Cart----------
console.log('//----------Cart----------');

let cart = new Cart();
console.log('Проверка создания объекта Cart: ', JSON.stringify(cart));

console.log('Проверка получения списка выбранных товаров: ', JSON.stringify(cart.productsList));

cart.addProduct(apiProducts.items[0]);
cart.addProduct(apiProducts.items[1]);
console.log('Проверка добавления товаров в корзину: ', JSON.stringify(cart.productsList));

console.log('Проверка расчета стоимости корзины: ', cart.getTotalCartPrice());

console.log('Проверка получения количества товаров в корзине: ', cart.getProductCountInCart());

cart.discardProduct(apiProducts.items[0]);
console.log('Проверка удаления товара из корзины: ', JSON.stringify(cart.productsList));

console.log('Успешный поиск товара по id: ', cart.isProductInCartById('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'));
console.log('Не успешный поиск товара по id: ', cart.isProductInCartById('854cef69-976d-4c2a-a18c-2aa45046c390'));

cart.cleanCart()
console.log('Проверка очистка корзины: ', JSON.stringify(cart.productsList));
