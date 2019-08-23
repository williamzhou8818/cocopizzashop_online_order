import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-softdrinks',
  templateUrl: './softdrinks.component.html',
  styleUrls: ['./softdrinks.component.scss']
})
export class SoftdrinksComponent implements OnInit {

  _softdrinks;
  softdrinks$;
  products;
  productIds;
  

  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.softdrinks$ = this.productService.getSoftDrinks().valueChanges()
    .pipe(map( softdrink => {
       this._softdrinks = softdrink;
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
