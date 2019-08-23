import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  id;
  categories$;
  product:any={};
  toppings = new FormControl();
  toppingList: string[] = [ 'Ham', 'Hot_Salami', 'Bacon', 'Beef', 
                            'Prawns', 'Seafood Mix', 'Seasoned Beef', 'Roasted Chicken',
                            'Mushrooms', 'Capsicum',  'Anchovies', 
                            'Pineapple', 
                            'Olives', 'Onion','Herbs','Garlic', 'Nutella',
                            'Extra Cheese', 'Extra Sauce'
              ];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private categoryService: CategoryService,
               private productService: ProductService) { 

    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) this.productService.get(this.id).valueChanges().pipe(take(1))
              .subscribe(p => this.product = p);

  }

  save(product) {

    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
    // console.log(product);
  }

  delete() {
    if (!confirm('Are you sure want to delete this product?')) return;
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
