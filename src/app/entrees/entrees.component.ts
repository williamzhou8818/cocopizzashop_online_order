import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.scss']
})
export class EntreesComponent implements OnInit {

  _entrees;
  entrees$;
  products;
  productIds;

  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {

    this.entrees$ = this.productService.getEntrees().valueChanges()
    .pipe(map( entree => {
       this._entrees = entree;
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
