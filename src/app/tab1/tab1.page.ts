import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductPage } from '../models/product-page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  page: IProductPage;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProductPage(1).subscribe(page => this.page = page);
  }
}
