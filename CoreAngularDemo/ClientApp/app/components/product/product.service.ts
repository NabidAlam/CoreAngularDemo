import { Injectable } from '@angular/core';
import { IProduct } from './product'

@Injectable()
export class ProductService {
    getProduct(): IProduct[] {
        return [
            {
                "productId": 1,
                "productName": "Bags",
                "productCode": "AB-1001",
                "date": "Apr 10, 2018",
                "desc": "Bags",
                "price": 500,
                "starRating": 3,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNvPm2Cc8nC8Nbc07ExpcTvw8lCzEIJjIJkmaSfvvL88Z63CYjg"
            },
            {
                "productId": 2,
                "productName": "Shoes",
                "productCode": "AB-1002",
                "date": "Apr 10, 2018",
                "desc": "Shoes",
                "price": 400,
                "starRating": 4,
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDawK3VivLCRaHnYiRexL7Y9L9UQzXZq-zXd5_urc9Hke2kN"
            }
        ];
    }
}