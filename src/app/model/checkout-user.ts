import {environment} from '../../environments/environment';
export class checkout_user {
    user_id: number;
    grand_total: number;
    order_items: number;
    name: string;
    last_name: string;
    email: any;
    mobile_num: number;
    user_street: string;
    user_appartment: string;
    user_city: string;
    user_state: string;
    user_postcode: number;
    user_country: string;
    company: string;
    order_note: string;
    user_address_id: string;
    delivery_date: string;
}
export class razor_options{
    "key"= 'rzp_test_MR7UimzbaGMepN';
    "amount": number;
    "currency": "INR";
    "name": "DivyaPuja";
    "order_id": string;    
    "prefill": {
      "name": string,
      "email": string,
      "contact": string
    }
    "handler": (response: any) => {};
    "modal": {
      escape: false
     
    };
}