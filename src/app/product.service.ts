import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return  this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges()
              .pipe(map(changes =>  changes.map(c=>({id: c.payload.key, ...c.payload.val()}))));
  }

  getSamllPizza() {
    return this.db.list('/classicsmallpizza')
  }
  getLargePizza() {
    return this.db.list('/classiclargepizza')
  }
  getFamilyPizza() {
    return this.db.list('/classicfamilypizza')
  }

  getSmallGourmetPizza() {
    return this.db.list('/gourmetsmallpizza')
  }
  getLargeGourmetPizza() {
    return this.db.list('/gourmetlargepizza')
  }
  getFamilyGourmetPizza() {
    return this.db.list('/gourmetfamilypizza')
  }

  getPasta() {
    return this.db.list('/pasta')
  }
  getEntrees() {
    return this.db.list('/entrees')
  }

  getSides() {
    return this.db.list('/sides')
  }
  getDesserts() {
    return this.db.list('/dessests')
  }
  getSoftDrinks() {
    return this.db.list('/softdrinks')
  }



  get(productId) {
    return this.db.object('/products/'+ productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
 


  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }


}
