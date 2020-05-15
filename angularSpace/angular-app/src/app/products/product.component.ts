import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { ProductService } from "src/app/products/product.service";


@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
   // styles:['thead{color:#265E95;font-size:20px;}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit {

   // var pageTitle = "Product List Page"
   // string  pageTitle = "Product List Page"

   pageTitle : string = "Product List Page @@@@@@@@@@"

   isOnline : boolean = true;

   age : number = 21;

   imageWidth :number = 150;
   imageMargin :number = 10;

   showImage :boolean = false;


   listFilter:string;

   products : IProduct[];

   // TS >> varaiableName : dataType = value 

//    function name(){
//        //logic
//    }

    constructor( private _productService: ProductService ){

    }

    ngOnInit(): void {
            console.log('Component Initialized');
           // this.products =  this._productService.getProducts();
           this._productService.getProducts().subscribe((data) => this.products = data)
            console.log('Productsss :::: ',this.products );
    }

     toggleImage():void{
            console.log('Before change ' + this.showImage);
            this.showImage = !this.showImage;
            console.log('After change ' + this.showImage);


            ///    true      = !false - in 1st call
            ///     false          = !true - in second call
     }

     onRatingClicked(message:string):void{
         this.pageTitle +=  message ;
     }
}