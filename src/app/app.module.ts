import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Mat
import {MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';


// end 


import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent, DialogOverviewExampleDialog} from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent, DialogContentExampleDialog } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { SmallclassicpizzaComponent } from './smallclassicpizza/smallclassicpizza.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { LargeclassicpizzaComponent } from './largeclassicpizza/largeclassicpizza.component';
import { FamilyclassicpizzaComponent } from './familyclassicpizza/familyclassicpizza.component';
import { GourmetpizzasmallComponent } from './gourmetpizzasmall/gourmetpizzasmall.component';
import { GourmetpizzalargeComponent } from './gourmetpizzalarge/gourmetpizzalarge.component';
import { GourmetpizzafamilyComponent } from './gourmetpizzafamily/gourmetpizzafamily.component';
import { PastaComponent } from './pasta/pasta.component';
import { EntreesComponent } from './entrees/entrees.component';
import { SidesComponent } from './sides/sides.component';
import { DesertsComponent } from './deserts/deserts.component';
import { SoftdrinksComponent } from './softdrinks/softdrinks.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    HomeComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    DialogOverviewExampleDialog,
    DialogContentExampleDialog,
    SmallclassicpizzaComponent,
    ShoppingCartSummaryComponent,
    LargeclassicpizzaComponent,
    FamilyclassicpizzaComponent,
    GourmetpizzasmallComponent,
    GourmetpizzalargeComponent,
    GourmetpizzafamilyComponent,
    PastaComponent,
    EntreesComponent,
    SidesComponent,
    DesertsComponent,
    SoftdrinksComponent
  ],
  imports:[
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    CustomFormsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [AuthService,
              AuthGuardService, 
              UserService,
              AdminAuthGuardService,
              CategoryService,
              ProductService,
              ShoppingCartService,
              OrderService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog, DialogContentExampleDialog],

})
export class AppModule { }
