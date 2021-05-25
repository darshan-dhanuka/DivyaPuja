import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { BehavioralSubjectService } from '../service/behavioral-subject.service';
import {  DataService } from '../service/data.service'; 
import { ProductService } from '../service/product.service';
interface addCart {
  product_id: string;
  user_id: string;
  shipping: string;
  expected_delivery_date: string;
}
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  productList: any[];

  constructor(
          private dataService :DataService,
          private productService: ProductService,
          private alertService: AlertService,
          private behavioralSubjectService: BehavioralSubjectService) 
          { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  addToCart(product_id){
    //fetch user details
    let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);

    //call api from data service (services are used to call api and fetch data). All services should be made in service folder, you can use data.service for calling apis for now like below
    this.dataService.addToCart(user, product_id)
          .subscribe(
              data => {
                //api data or success codes will come here
                console.log(data);
              },
               error => {
                    //api error will come here
                      if(error['message'])
                      {
                        alert(error['message']);
                      }
               });
  }
  getAllProducts() {
    this.productService.getProductDetails().subscribe((data) => {
      console.log(data);
      this.productList = data['data'];

    });
  }
  addToCartProduct(product){
    const productDetails   = product;
    productDetails.user_id = '11';
    productDetails.product_id = product.id;
    this.productService.addCartDetails(productDetails).subscribe((res)=>{
      this.behavioralSubjectService.isEvent.next('addCart');
      console.log(res);
    });
  }
}
