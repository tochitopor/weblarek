import './scss/styles.scss';

//import {Buyer} from './components/models/Buyer';
//import {Cart} from './components/models/Cart';
import {ProductCatalog} from './components/models/ProductCatalog';

//import {apiProducts} from './utils/data';
import {initProducts} from './utils/data';


// let buyer = new Buyer('card', 'Земля', '777 77 77', 'ganja@yandex.ru');
// let cart = new Cart();

let productCatalog = new ProductCatalog(initProducts, null);
console.log('Проверка создания объекта ProductCatalog: ', JSON.stringify(productCatalog));
