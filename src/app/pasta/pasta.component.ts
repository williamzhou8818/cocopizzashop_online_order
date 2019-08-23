import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {

  _pasta;
  pasta$;
  products;
  productIds;

  noodle: string;



  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {

    this.pasta$ = this.productService.getPasta().valueChanges()
    .pipe(map( pasta => {
       this._pasta = pasta;
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
