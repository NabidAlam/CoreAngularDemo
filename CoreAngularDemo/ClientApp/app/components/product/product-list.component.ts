import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
   
})
export class ProductListComponent {

    pageTitle: string = "Product Management";
    getTitle(): string { return "Product Management"; };
    tableTitle: string = "Product List";
    imageWidth: number= 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    filterText: string = 'cart';
    products: any[] = [
        {
            "productId": 1,
            "productName": "Bags",
            "productCode": 1001,
            "date": "Apr 10, 2018",
            "desc": "Bags",
            "price": 500,
            "starRating": 5,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNvPm2Cc8nC8Nbc07ExpcTvw8lCzEIJjIJkmaSfvvL88Z63CYjg"
        },
        {
            "productId": 2,
            "productName": "Shoes",
            "productCode": 1002,
            "date": "Apr 10, 2018",
            "desc": "Shoes",
            "price": 400,
            "starRating": 4.5,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDawK3VivLCRaHnYiRexL7Y9L9UQzXZq-zXd5_urc9Hke2kN"
        }
    ];
    //products: IProduct[] = [
    //    {
    //        "productId": 1  ,
    //        "productName": "Bags",
    //        "productCode": 1001,
    //        "date": "Apr 10, 2018",
    //        "desc": "Bags",
    //        "price": 500,
    //        "starRating": 5,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNvPm2Cc8nC8Nbc07ExpcTvw8lCzEIJjIJkmaSfvvL88Z63CYjg"
    //    },
    //    {
    //        "productId": 2,
    //        "productName": "Shoes",
    //        "productCode": 1002,
    //        "date": "Apr 10, 2018",
    //        "desc": "Shoes",
    //        "price": 400,
    //        "starRating": 4.5,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDawK3VivLCRaHnYiRexL7Y9L9UQzXZq-zXd5_urc9Hke2kN"
    //    }
    //];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
