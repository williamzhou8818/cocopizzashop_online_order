import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gourmetpizzasmall',
  templateUrl: './gourmetpizzasmall.component.html',
  styleUrls: ['./gourmetpizzasmall.component.scss']
})
export class GourmetpizzasmallComponent implements OnInit {
  _gourmetsmallpizzas;
  gourmetsmallpizzas$;
  products;
  productIds;
  
  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.gourmetsmallpizzas$ = this.productService.getSmallGourmetPizza().valueChanges()
    .pipe(map( gourmetsmallpizza => {
       this._gourmetsmallpizzas = gourmetsmallpizza;
       console.log(this._gourmetsmallpizzas);
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
