import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductPage } from '../models/product-page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  page: IProductPage;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProductPage(2).subscribe(page => this.page = page);
  }
}
