import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { async } from 'q';

declare var paypal;

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;


  // product = {
  //   price: 7.00,
  //   description: 'Pizza',
  // };

  paidFor = false;

  // @ViewChild('delivery',{ read: true, static: false }) delivery: HTMLElement;

  //delivery:boolean = true;
  // pickup:boolean = true;
  cart:  any;
  userId: string;

  totalPrice: any;
  message='';

  subscription: Subscription;
  userSubscription: Subscription;

  shipping:any={};
 
  time = {hour: 13, minute: 30};
  meridian = true;


  constructor(
              private router: Router,
              private authService: AuthService,
              private shoppingCartSevice: ShoppingCartService,
              private orderService: OrderService) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartSevice.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)
    

    // render paypal button
    paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'AUD',
                    value: this.totalPrice
                  }
                }
              ]
            });
          },
          onApprove: async(data, actions) => {
             await actions.order.capture();
            this.paidFor = true;
            //console.log(order);

            let order = {
              userId: this.userId,
              datePlaced: new Date().getTime(),
              shipping: this.shipping,
              time: this.time,
              payFor: this.paidFor,
              isdone: false,
              totalPrice: this.totalPrice,
              items: this.cart.items.map(i => {
                return {
                  product: {
                    product:i.product,
                    size: i.size,
                    price: i.price
                  },
                  quantity: i.quantity,
                  subPrice: i.price * i.quantity,
                }
              })
            };
            let result = await this.orderService.placeOrder(order);
            this.router.navigate(['/order-success', result.key]);

          },
        })
        .render(this.paypalElement.nativeElement);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }


  selectOption(selectEvent){
    console.log(selectEvent)
    if(selectEvent === 'delivery') {
      this.totalPrice  = this.cart.totalPrice + 6;
      this.message = '*Delivery fee is + A$6.00, extra A$2.00 for out of areas, Minimum Order cost A$20.00';
    } else {
      this.totalPrice = this.cart.totalPrice;
      this.message = '';

    }
    console.log(this.totalPrice)
  }

  async placeOrder() {

    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      payFor: this.paidFor,
      isdone: false,
      time: this.time,
      totalPrice: this.cart.totalPrice,
      items: this.cart.items.map(i => {
        return {
          product: {
            product:i.product,
            size: i.size,
            price: i.price
          },
          quantity: i.quantity,
          subPrice: i.price * i.quantity,
        }
      })
    };
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);

  }

 

}
