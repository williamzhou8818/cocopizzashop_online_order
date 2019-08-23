import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appUser: any;
  appisAdmin: any;
  categories$;
  // shoppingCartItemCount: number;
  _cart;
  cart$;
  

  constructor( public auth: AuthService, 
              public router: Router,
              private userService: UserService,
              private shoppingCartService:  ShoppingCartService,
              categoryService: CategoryService) {


    this.categories$ = categoryService.getCategories();

  }

  async ngOnInit() {

   this.cart$ = await this.shoppingCartService.getCart();

    
  //  this.cart$.valueChanges().subscribe((cart:any) => {

  //    console.log(cart)
  //   this.shoppingCartItemCount = 0;
  //       for( let productId in cart.items) {
  //         this.shoppingCartItemCount += cart.items[productId].quantity
  //       }

  //  });

    this.auth.appUser$.subscribe(appUser => { 

      if(appUser) {
        this.appUser = appUser;
        this.appisAdmin = appUser.isAdmin;

      }

      return null;

          
      }
    );
    this.auth.user$.subscribe(user => {
      if(user) {

        this.userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl) {
          localStorage.removeItem('returnUrl');
          this.router.navigateByUrl(returnUrl);

        }

      }
    })


  }

  logout() {
    this.auth.logout();
  }
}
