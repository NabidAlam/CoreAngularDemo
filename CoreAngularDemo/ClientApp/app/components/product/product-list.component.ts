import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
   
})
export class ProductListComponent implements OnInit {
   
    ngOnInit(): void {
     
        this.products = this._productService.getProduct();
        this.filteredProduct = this.products;
       
    }
    pageTitle: string = "Product Management";
    getTitle(): string { return "Product Management"; };
    tableTitle: string = "Product List";
    imageWidth: number= 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    // filterText: string = 'cart';
    _filterText: string;
    get filterText(): string {
        return this._filterText
    }
    set filterText(value: string) {
        this._filterText = value;
        this.filteredProduct = this.filterText ? this.performFilter(this.filterText) : this.products;
    }


    filteredProduct: IProduct[];
     products: IProduct[];
    //products: any[] = [
    //    {
    //        "productId": 1,
    //        "productName": "Bags",
    //        "productCode": "AB-1001",
    //        "date": "Apr 10, 2018",
    //        "desc": "Bags",
    //        "price": 500,
    //        "starRating": 5,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNvPm2Cc8nC8Nbc07ExpcTvw8lCzEIJjIJkmaSfvvL88Z63CYjg"
    //    },
    //    {
    //        "productId": 2,
    //        "productName": "Shoes",
    //        "productCode": "AB-1002",
    //        "date": "Apr 10, 2018",
    //        "desc": "Shoes",
    //        "price": 400,
    //        "starRating": 4.5,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDawK3VivLCRaHnYiRexL7Y9L9UQzXZq-zXd5_urc9Hke2kN"
    //    }
    //];
    //products: IProduct[] = [
    //    {
    //        "productId": 1  ,
    //        "productName": "Bags",
    //        "productCode": "AB-1001",
    //        "date": "Apr 10, 2018",
    //        "desc": "Bags",
    //        "price": 500,
    //        "starRating": 3,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNvPm2Cc8nC8Nbc07ExpcTvw8lCzEIJjIJkmaSfvvL88Z63CYjg"
    //    },
    //    {
    //        "productId": 2,
    //        "productName": "Shoes",
    //        "productCode": "AB-1002",
    //        "date": "Apr 10, 2018",
    //        "desc": "Shoes",
    //        "price": 400,
    //        "starRating": 4,
    //        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDawK3VivLCRaHnYiRexL7Y9L9UQzXZq-zXd5_urc9Hke2kN"
    //    }
    //];
    constructor(private _productService: ProductService) {
                  
    }
   
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = this.filterText.toLocaleLowerCase();
       console.log(this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1));
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onratingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
