import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  products: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor (
    private route: ActivatedRoute,
    private productService: ProductService
  ){
    this.route.paramMap.subscribe(param => {
      const id =  Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product => {
        this.products = product;
      },
      error => console.log(error.message)
      )
    })
  }
}
