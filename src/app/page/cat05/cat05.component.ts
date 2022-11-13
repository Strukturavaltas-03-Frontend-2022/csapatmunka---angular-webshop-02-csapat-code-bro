import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat05',
  templateUrl: './cat05.component.html',
  styleUrls: ['./cat05.component.scss']
})
export class Cat05Component implements OnInit {

  thrillerMovies$: Observable<Product[]> = this.productService
  .getAll()
  .pipe(map((product) => product.filter((movie) => movie.catId === 5)));

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
