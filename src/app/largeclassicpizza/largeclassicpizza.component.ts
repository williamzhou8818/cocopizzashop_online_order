import { Component, OnInit , Inject} from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-largeclassicpizza',
  templateUrl: './largeclassicpizza.component.html',
  styleUrls: ['./largeclassicpizza.component.scss']
})
export class LargeclassicpizzaComponent implements OnInit {

  _largepizzas;
  largePizza$;
  products;
  productIds;

  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.largePizza$ = this.productService.getLargePizza().valueChanges()
    .pipe(map( largepizza=> {
       this._largepizzas = largepizza;
       console.log(this._largepizzas)
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
