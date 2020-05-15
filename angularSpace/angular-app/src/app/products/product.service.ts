import { Injectable } from "@angular/core";

import { IProduct } from "src/app/products/product";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';


//In Angular 2 + Angular 4
// import {Http} from "@angular/http"
// {HttpClient} was first introduced in Angular4 


// Promise :: Javascript functionality to handle async data 
// Single value at a time , non cancellable 


// Observable :: Emits multiple value + Cancellable 




@Injectable()
export class ProductService{

        private productUrl ="https://ngproductsparam.herokuapp.com/api/getProductDetails/";
        constructor(private _http: HttpClient){
            
        }

        getProducts():Observable<IProduct[]>{
          return this._http.get<IProduct[]>(this.productUrl)
        }


        getProductDetails(id):Observable<IProduct>{
          return this._http.get<IProduct>(this.productUrl+id)
        }
}