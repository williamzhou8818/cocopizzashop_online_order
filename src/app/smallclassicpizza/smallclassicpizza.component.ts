import { Component, OnInit , Inject} from '@angular/core';
import { ProductService } from '../product.service';
import { map, switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-smallclassicpizza',
  templateUrl: './smallclassicpizza.component.html',
  styleUrls: ['./smallclassicpizza.component.scss']
})
export class SmallclassicpizzaComponent implements OnInit{
   _smallpizzas;
   smallPizza$;
   products; 
   productIds;
  constructor(public productService: ProductService,
    private cartService: ShoppingCartService) { 

    }

    ngOnInit() {
      this.smallPizza$ = this.productService.getSamllPizza().valueChanges()
      .pipe(map(smallpizza=> {
         this._smallpizzas = smallpizza;
         console.log(this._smallpizzas)
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


