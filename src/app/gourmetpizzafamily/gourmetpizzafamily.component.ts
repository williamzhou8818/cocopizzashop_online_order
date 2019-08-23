import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gourmetpizzafamily',
  templateUrl: './gourmetpizzafamily.component.html',
  styleUrls: ['./gourmetpizzafamily.component.scss']
})
export class GourmetpizzafamilyComponent implements OnInit {
  _gourmetfamilypizzas;
  gourmetfamilypizzas$;
  products;
  productIds;
  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.gourmetfamilypizzas$ = this.productService.getFamilyGourmetPizza().valueChanges()
    .pipe(map( gourmetfamilypizza => {
       this._gourmetfamilypizzas = gourmetfamilypizza;
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
