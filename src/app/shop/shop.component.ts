import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { AlertService } from '../service/alert.service';
import { BehavioralSubjectService } from '../service/behavioral-subject.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
interface addCart {
  product_id: string;
  user_id: string;
  shipping: string;
  expected_delivery_date: string;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public productList: any[];

  constructor(
    private productService: ProductService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private behavioralSubjectService: BehavioralSubjectService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProductList().subscribe((data) => {
      console.log(data);
      this.productList = data['data']['products'];
    });
  }
  addToCart(product) {
    const productDetails = {
      user_id: '11', product_id: product.id, qty: '2'
    };
    this.productService.addCartDetails(productDetails).subscribe((res) => {
      this.toastr.success('Product added successfully!');
      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: 'Product added successfully!',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      this.behavioralSubjectService.isEvent.next('addCart');
      console.log(res);
    });
  }
  cartDetails(user_id) {
    this.productService.getCartDetails(user_id).subscribe((data) => {
    });
  }
}
