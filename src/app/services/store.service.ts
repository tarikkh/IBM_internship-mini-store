import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
const STORE_BASE_URL = 'http://localhost:5000'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort='desc', category ="all"): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products?category=${category}&sort=${sort}&limit=${limit}`,
    )
  }

  getAllCategories():Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/categories`
    )
  }
}
