import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { SmallclassicpizzaComponent } from './smallclassicpizza/smallclassicpizza.component';
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

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'smallclassicpizza', component: SmallclassicpizzaComponent},
  {path: 'largeclassicpizza', component: LargeclassicpizzaComponent},
  {path: 'familyclassicpizza', component: FamilyclassicpizzaComponent},

  {path: 'smallgourmetpizza', component: GourmetpizzasmallComponent},
  {path: 'largegourmetpizza', component: GourmetpizzalargeComponent},
  {path: 'familygourmetpizza', component: GourmetpizzafamilyComponent},

  {path: 'pasta', component: PastaComponent},
  {path: 'entrees', component: EntreesComponent},
  {path: 'sides', component: SidesComponent},
  {path: 'desserts', component: DesertsComponent},
  {path: 'softdrinks', component: SoftdrinksComponent},













  {path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuardService]},
  {path: 'order-success/:id', component: OrderSuccessComponent, canActivate:[AuthGuardService]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuardService]},

  { path: 'admin/products/new', 
  component: ProductFormComponent, 
  canActivate:[AuthGuardService, AdminAuthGuardService]
  },
  { path: 'admin/products/:id', 
  component: ProductFormComponent, 
  canActivate:[AuthGuardService, AdminAuthGuardService]
  },
  { path: 'admin/products', 
  component: AdminProductsComponent, 
  canActivate:[AuthGuardService, AdminAuthGuardService]
 },
  { path: 'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate:[AuthGuardService, AdminAuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
