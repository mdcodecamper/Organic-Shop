import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }


  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated : new Date().getTime()
    });
  }

  getCart(cartId: string){
      return this.db.object('/shopping-carts/' + cartId);
  }

  private addOrCreateCart(){
    let cartId = localStorage.getItem('cartId');
           if(!cartId){
              this.create().then(result => {
              localStorage.setItem('cartId',result.key);

              return this.getCart(result.key);  
            });
          } 
          else{
            return this.getCart(cartId);

          }
  }
    
}
