import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public productList: any[];

  constructor(
    private productService: ProductService,
    private alertService: AlertService)
    { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProductDetails().subscribe((data) => {
      console.log(data);
      this.productList = data['data'];

    });
  }
  addToCart(product){
    this.productService.addCartDetails(product).subscribe((res)=>{
      console.log(res);
    });
  }
  cartDetails(user_id) {
    this.productService.getCartDetails(user_id).subscribe((data) => {

    });
  }
}
