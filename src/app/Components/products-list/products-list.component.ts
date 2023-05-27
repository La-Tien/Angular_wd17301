import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: IProduct[] = []
  title = "Quan li san pham";
  status: boolean = false;
  valueInput: string = ""
  // @Input() products !: IProduct[]
  // @Output() onRemove = new EventEmitter<number>()
  // product: IProduct[] = [
  //   {
  //     _id: 0,
  //     name: "Products A",
  //     price: 200,
  //     img: "anh"
  //   }
  // ]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    },
      error => {
        console.log(error);
      })
  }
  toggle() {
    console.log(1)
    this.status = !this.status
  }
  setValue(e: any) {
    this.valueInput = e.target.value
  }
  removeItem(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      console.log("Ban da xoa thanh cong");
      // this.onRemove.emit(id)
      this.products = this.products.filter(item => item.id != id)
    })

  }
}
