import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehavioralSubjectService } from '../service/behavioral-subject.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails:any=[];
  constructor(public activatedRoute:ActivatedRoute,public productService:ProductService,
     private behavioralSubjectService: BehavioralSubjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(productUrl=>{
        if(productUrl){
          this.getProductDetails(productUrl);
        }
    })
  }

  getProductDetails(productUrl){
    this.productService.getProductDetails(productUrl).subscribe(prodDetails=>{
      console.log('prodDetails ', prodDetails)
      if(prodDetails){
        if(prodDetails['data']['products'].length>0){
          this.productDetails=prodDetails['data']['products'];
        }else{
          this.productDetails=[];
        }
      }
    })
  }

  addToCart(product) {
    const productDetails = {
      user_id: '11', product_id: product.id, qty: '2'
    };
    this.productService.addCartDetails(productDetails).subscribe((res) => {
      this.behavioralSubjectService.isEvent.next('addCart');
      console.log(res);
    });
  }

}
