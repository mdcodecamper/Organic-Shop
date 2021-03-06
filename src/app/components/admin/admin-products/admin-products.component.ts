import { Params } from '@angular/router';
import { Product } from './../../../models/product';
import { Subscription } from 'rxjs/Rx';
import { query } from '@angular/animations';
import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy{
  products: Product[];
  subsciption: Subscription;
  tableResource: DataTableResource<Product>;
  items:Product[]=[];
  itemCount:number;

  constructor(private productService:ProductService) { 
    this.subsciption = this.productService.getAll()
                           .subscribe(products => 
                           {
                             this.products = products;
                             this.initializeTable(products);
                           });
    
  }

  private initializeTable(products: Product[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset:0}).then(items => this.items =items);
    this.tableResource.count().then(count => this.itemCount = count); 
  }

  reloadItems(params){
    if(!this.tableResource)
        return;

    this.tableResource.query(params).then(items => this.items =items);
  }

  filter(query: string){
      let filteredProducts = (query) ?
         this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLowerCase())) :
         this.products;

         this.initializeTable(filteredProducts);
  }

  

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.subsciption.unsubscribe();
    
  }

  ngOnInit() {
  }

}
