import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  products: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
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
  onHandleSubmit(){

    this.productService.updateProducts(this.products).subscribe(product =>{
      console.log(product);
      
    })
    
  }

}
