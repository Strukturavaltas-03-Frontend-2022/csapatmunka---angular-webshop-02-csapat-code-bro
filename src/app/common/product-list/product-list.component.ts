import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((dataList) => (this.productList = dataList));
  }
}
