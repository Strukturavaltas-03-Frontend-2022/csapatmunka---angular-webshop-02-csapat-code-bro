import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();

  //Kereső
  phrase: string = '';
  filterKey: string = '';

  //Sortolás
  fieldName: string = 'id';
  direction: number = 1;

  //Filter kulcsai
  movieForFilterKeys: any[] = this.configService.adminSearchOptions;

  //CatId megjelenítése

  catList: any[] = this.configService.catIdList;

  //Save gomb állapotmódosítás
  isActive = true;
  inProgress: boolean = true;

  constructor(
    private productService: ProductService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}

  getSortProp(property: string): void {
    this.fieldName = property;
    if (this.direction === 1) {
      this.direction = 0;
    } else {
      this.direction = 1;
    }
  }

  saveBtn(event: Event, product: Product): void {
    this.isActive = false;
    this.inProgress = false;
    if (
      typeof product.catId === 'string' ||
      typeof product.active === 'string' ||
      typeof product.featured === 'string'
    ) {
      product.catId = Number(product.catId);
      product.active = Boolean(product.active);
      product.featured = Boolean(product.featured);
    }
  }
}
