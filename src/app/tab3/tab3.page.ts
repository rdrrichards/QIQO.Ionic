import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductPage } from '../models/product-page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  page: IProductPage;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProductPage(3).subscribe(page => this.page = page);
  }
}

