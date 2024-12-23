import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;


  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>()

  constructor(private cartService: CartService) {
    this.product = {
      name: '',
      count: '',
      price: 0,
      img: ''
    }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.cartService.count++;
    this.cartService.sum += this.product.price;

    this.addToCartEvent.emit(this.product);
  }

}
