import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList : any [];

  constructor(private dataService :DataService) { }

  ngOnInit(): void {

    let user = JSON.parse(localStorage.getItem("currentUser"));
    let user_id = user.user.id;

    this.dataService.get_products_from_cart(user_id).then(res => {
      this.productList = res.data;
      console.log(this.productList);
    });

  }
  addToCart(product_id){
    //fetch user details
    let user = JSON.parse(localStorage.getItem("currentUser"));
    let user_id = user.user.id;

    //call api from data service (services are used to call api and fetch data). All services should be made in service folder, you can use data.service for calling apis for now like below
    this.dataService.addToCart(user_id, product_id)
          .subscribe(
              data => {
                //api data or success codes will come here
                if(data["status"] == "Added Successfully"){
                  alert("Product added successfully")
                }
              },
               error => {
                    //api error will come here
                      if(error['message'])
                      {
                        alert(error['message']);
                      }
               });
    }

}
