import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { IProductPage } from '../models/product-page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productsUrl = environment.baseUrls.products;
  private _headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this._headers.append('Content-Type', 'application/json');
    // this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productsUrl);
  }

  getProductPage(page = 1, psize = 8, orderBy = 'productName', category = 'all'): Observable<IProductPage> {
    const url = this._productsUrl + '?page=' + page + '&psize=' + psize + '&category=' + category + '&orderBy=' + orderBy;
    console.log(url);
    return this.http.get<IProductPage>(url);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._productsUrl}/${id}`);
  }

  addProduct(product: IProduct): Observable<any> {
    console.log(`${this._productsUrl}/${product.productKey}`);
    return this.http.post(this._productsUrl, product, { headers: this._headers });
  }

  updateProduct(product: IProduct): Observable<any> {
    console.log(`${this._productsUrl}/${product.productKey}`);
    return this.http.put(`${this._productsUrl}`, product, { headers: this._headers });
  }

  deleteProduct(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this._productsUrl}/${id}`, { headers: this._headers });
  }
}
