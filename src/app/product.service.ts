import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, finalize, map, Observable, throwError } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  discountPercentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4010/products/1';

  #saving = false;

  getProduct(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }

  updateProduct(product: Partial<Product>): Observable<Product> {
    this.#saving = true;
    return this.http.patch<Product>(this.apiUrl, product).pipe(
      delay(Math.random() * 10000),
      map(() => product as Required<Product>),
      finalize(() => this.#saving = false),
    );
  }

  submitProduct(): Observable<{ message: string }> {
    if(this.#saving) {
      return throwError(() =>  new Error('Cannot submit product while a save operation is in progress. Please wait for the current save to complete.'));
    }
    return this.http.post<{ message: string }>(`${this.apiUrl}/submit`, {});
  }
}
