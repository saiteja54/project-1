import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  pageTitle : string = "Product Detail Panel ";
  productName:string;
  description:string;
  img:string;

  constructor(private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += id;
    console.log('Product id ',  id );


    this._route.queryParams.subscribe((params) =>{
        this.productName =  params['name'];
        this.img =   params['img'];
        this.description = params['desc'];
    });

    // this._productService.getProductDetails(id).subscribe(data=>{
      
    // })
  }
  goBack():void{
      this._router.navigate(['/products']);
  }

}
