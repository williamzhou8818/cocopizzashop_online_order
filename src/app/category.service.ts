import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories').snapshotChanges()
    .pipe(map(changes =>  changes.map(c=>({id: c.payload.key, ...c.payload.val()}))));;
  }

}
