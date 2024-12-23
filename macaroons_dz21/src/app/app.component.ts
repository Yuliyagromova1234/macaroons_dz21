import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";

import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showPresent: boolean = true;
  constructor(private productService: ProductsService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  public products: ProductType[] = [];


  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

   public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    alert(product.name + ' добавлен в корзину!');
    this.scrollTo(target);
    this.formValues.productTitle = product.name.toUpperCase();
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Введите название пиццы');
      return;
    }
    if (!this.formValues.name) {
      alert('Введите имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите телефон');
      return;
    }
    alert('Заказ создан');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

}
