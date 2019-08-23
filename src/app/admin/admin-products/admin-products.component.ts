import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy{

  products: any;
  filteredProducts: any[];
  subscription: Subscription;



  constructor(private productService: ProductService) { 
     this.subscription = this.productService.getAll().subscribe(
            products => this.filteredProducts = this.products = products);
  } 

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.pizzaName.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
    //  console.log(query);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



