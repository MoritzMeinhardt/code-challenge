import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  readonly #fb = inject(FormBuilder);
  readonly #productService = inject(ProductService);

  productForm: FormGroup = this.#fb.group({
    title: ['', Validators.required],
    description: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    category: [''],
    brand: [''],
    stock: [0],
    discountPercentage: [0]
  });

  submitted = output<void>();
  save = output<void>();

  ngOnInit(): void {
    this.#productService.getProduct().subscribe((product: Product) => {
      this.productForm.patchValue(product);
    });
  }

  onFinalSubmit(): void {
    this.submitted.emit();
  }
}
