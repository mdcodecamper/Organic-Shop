import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  products:Product[]=[];
  filteredProduct: Product[];
  category:string;

  constructor(productService: ProductService,
              route: ActivatedRoute  ) { 

    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return  route.queryParamMap;
      })
      .subscribe(params => {
      this.category = params.get('category');

      this.filteredProduct = (this.category) ? 
          this.products.filter(p => p.category === this.category) : 
          this.products;
      });
  }
}
