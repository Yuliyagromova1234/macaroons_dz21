import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        name: 'Макарун с малиной',
        count: '1 шт.',
        price: 1.70,
        img: 'macaroon1.png'
      },
      {
        name: 'Макарун с манго',
        count: '1 шт.',
        price: 1.70,
        img: 'macaroon2.png'
      },
      {
        name: 'Пирог с ванилью',
        count: '1 шт.',
        price: 1.70,
        img: 'macaroon3.png'
      },
      {
        name: 'Пирог с фисташками',
        count: '1 шт.',
        price: 1.70,
        img: 'macaroon4.png'
      }
    ]
  }
}
