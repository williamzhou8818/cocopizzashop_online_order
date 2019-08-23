import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShoppingCartService } from '../shopping-cart.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


export interface DialogData {
  topping: any[];
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'toppingModel.html',

})
export class DialogOverviewExampleDialog {
  topping: any[]=[];
  toppings = new FormControl();
  toppingList: string[] = [ 'Ham', 'Hot_Salami', 'Bacon', 'Beef', 
                            'Prawns', 'Seafood Mix', 'Seasoned Beef', 'Roasted Chicken',
                            'Mushrooms', 'Capsicum',  'Anchovies', 
                            'Pineapple', 
                            'Olives', 'Onion','Herbs','Garlic', 'Nutella',
                            'Extra Cheese', 'Extra Sauce'
              ];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('qty', { read: true, static: false }) qty:ElementRef;
  pizzaTopping: any[];
  name: string;
  _qty=0;
  topping: any[];
  price_toppings: number;
  
  products: any[] = [];
  filteredProducts: any[] = [];
  categories$;
  category: string;
  selectSize: any;
  size='';
  _price: number = 0;

  productIds;
  pizzaSize;
  toppings = new FormControl();
  toppingList: string[] = [ 'Ham', 'Hot_Salami', 'Bacon', 'Beef', 
                            'Prawns', 'Seafood Mix', 'Seasoned Beef', 'Roasted Chicken',
                            'Mushrooms', 'Capsicum',  'Anchovies', 
                            'Pineapple', 
                            'Olives', 'Onion','Herbs','Garlic', 'Nutella',
                            'Extra Cheese', 'Extra Sauce'
              ];

  isload=true;


  // price = [
  //   {small: 6},
  //   {large: 9},
  //   {family: 14}
  // ]

  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['./assets/imgs/header-cover.jpg'];


  constructor(public productService: ProductService,
              categoryService: CategoryService,
              private cartService: ShoppingCartService,
              public dialog: MatDialog,
              route: ActivatedRoute,
              config: NgbCarouselConfig) { 

      
       // customize default values of carousels used by this component tree

      //  config.interval = 10000;
      //  config.wrap = false;
      //  config.keyboard = false;
      //  config.pauseOnHover = false;

      productService
        .getAll().pipe(switchMap(products =>  {
        this.products = products;
        this.productIds = Object.keys(products);
        // console.log(this.productIds);

        // for(let pId of this.productIds) {
        //   this.pizzaSize = this.products[pId].pizzaSize
        //   console.log(this.pizzaSize)
        //   this.pizzakey = Object.keys(this.pizzaSize);
        //   for (let pKey of this.pizzakey) {
        //     console.log(this.pizzaSize[pKey]);
        //   }
        // }
        this.isload=false;

        return  route.queryParamMap; 
        }))
        .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;

      //  console.log(this.filteredProducts);
        // Get Select Pizaa Size Price
        

      })
   
    this.categories$ = categoryService.getCategories();


  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '270px',
      data: {topping: this.topping}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(`Dialog result: ${result}`);
      this.pizzaTopping = result;

        if(this.pizzaTopping.length > 0) {
          this.price_toppings = this.pizzaTopping.length * 1.0;
        }
    });
  }


  sizeChange(event) {
    this._price = event.target.value;

    // switch(this.size) {
    //   case 'SMALL':
    //     this._price = 7.95;
    //     break;
    //   case 'LARGE':
    //     this._price = 9.95;
    //     break;
    //   case 'FAMILY': 
    //     this._price = 14.95;
    // }
    console.log(this._price);
   // console.log(this._price);
  }

  addToCart(name, size, price) {
    // console.log('products.component' + name);
    let cartId = localStorage.getItem('cartId');
    if(!cartId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);
        // Add product to cart
      });
    }
    this.cartService.addToCart(name, size, price);
  }



  ngOnInit() {
    // let cart$ = await this.cartService.getCart();
    // cart$.valueChanges().subscribe((cart:any) => {
    //   this.productIds = Object.keys(cart.items)
    //  // console.log(Object.keys(this.cart.items))
      
    // // get each shopping cart items
    // for(let productId of this.productIds) {
    //    // console.log(cart.items[productId].pizzaPrice *  cart.items[productId].quantity);
    //    this._qty = cart.items[productId].quantity;
       
    //    console.log('from fier'+this._qty);
    // }
   
  //  });

  }






}


