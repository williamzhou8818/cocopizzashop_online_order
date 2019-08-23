import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-familyclassicpizza',
  templateUrl: './familyclassicpizza.component.html',
  styleUrls: ['./familyclassicpizza.component.scss']
})
export class FamilyclassicpizzaComponent implements OnInit {

  _familypizzas;
  familypizzas$;
  products;
  productIds;

  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.familypizzas$ = this.productService.getFamilyPizza().valueChanges()
    .pipe(map( familypizza => {
       this._familypizzas = familypizza;
       console.log(this._familypizzas);
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
