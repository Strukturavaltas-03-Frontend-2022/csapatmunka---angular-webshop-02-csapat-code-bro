import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {


  comedyMovies$: Observable<Product[]> = this.productService
  .getAll()
  .pipe(map((product) => product.filter((movie) => movie.catId === 3)));


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
