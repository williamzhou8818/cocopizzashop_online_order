import { Component, OnInit, Input, ViewChild, ElementRef , Inject} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('subPrice', { read: true, static: false }) SubPrice:ElementRef;

  cart;
  pizzaName;
  sum:any;
  _price;
  size = '';
  totalPrice=0; // need set default price as 0 else will be error
  subPrice:any;
  productIds;

  products;
  pizzaSize;
  selectPizzaToppings;
  selectPizzaPrice;

  priceSmall;

  shoppingCartItemCount;
  constructor(private shoppingCartService: ShoppingCartService,
               private db: AngularFireDatabase) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe((cart:any) => {
    this.shoppingCartItemCount = 0;
      this.cart = cart;
      this.productIds = Object.keys(this.cart.items)
    //console.log(Object.keys(this.cart.items))

    // for(let i=0; i<this.cart.items; i++) {
    //   this.productIds = Object.keys(this.cart.items)

    //   console.log(this.cart.items[i])
    // }
      
    // get each shopping cart items
    for(let productId of this.productIds) {
      let _totalPrice = 0;
      let price = +cart.items[productId].price;
      let quantity = +cart.items[productId].quantity
      let subPrice = price*quantity;
       console.log(subPrice)
      //  this.subPrice = +cart.price *  +cart.quantity;
      //  console.log(this.subPrice);
      //  this.totalPrice += cart.items[productId].price;
    }


        // for( let productId in cart.items) {
          
        //   this.shoppingCartItemCount += cart.items[productId].quantity;
        //   this.products = cart.items[productId].products;
        //   this.pizzaSize = cart.items[productId].pizzaSize;
        //   this.selectPizzaToppings = cart.items[productId].pizzaExtrTopping;
        //   this.selectPizzaPrice = cart.items[productId].pizzaPrice;

        //   // 
        //   this.priceSmall = cart.items[productId].small;
         

        // }
   });

  }
   
  addToCart(name, size, price) {
    console.log('products.component' + name);

    let cartId = localStorage.getItem('cartId');
    if(!cartId) {
      this.shoppingCartService.create().then(result => {
        localStorage.setItem('cartId', result.key);
        // Add product to cart
      });
    }
     this.shoppingCartService.addToCart(name, size, price);
     
  }

  reMoveFromCart(name, size, price) {
    this.shoppingCartService.reMoveFromCart(name, size, price);
  }

}
