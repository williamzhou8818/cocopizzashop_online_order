import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gourmetpizzalarge',
  templateUrl: './gourmetpizzalarge.component.html',
  styleUrls: ['./gourmetpizzalarge.component.scss']
})
export class GourmetpizzalargeComponent implements OnInit {

  _gourmetlargepizzas;
  gourmetlargepizzas$;
  products;
  productIds;

  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.gourmetlargepizzas$ = this.productService.getLargeGourmetPizza().valueChanges()
    .pipe(map( gourmetlargepizza => {
       this._gourmetlargepizzas = gourmetlargepizza;
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
