import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss']
})
export class SidesComponent implements OnInit {
  _sides;
  sides$;
  products;
  productIds;
  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.sides$ = this.productService.getSides().valueChanges()
    .pipe(map( sides => {
       this._sides = sides;
    })).subscribe();
  }

  addToCart(name, size, price) {
    console.log('products.component' + name);
    let cartId = localStorage.getItem('cartId');
    if(!cartId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);
        // Add product to cart
      });
    }
     this.cartService.addToCart(name, size, price);
  }

}
