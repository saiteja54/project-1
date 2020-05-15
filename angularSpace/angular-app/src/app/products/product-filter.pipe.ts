import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "src/app/products/product";


@Pipe({
    name :'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[],filterBy:string) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
        console.log('Filter by converted to lower case::: ', filterBy);

        return filterBy ? value.filter((product:IProduct)=> 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

}



// values >>> all product data
// userInput >>> cart/CART/Cart >> cart

//product.productName.toLocalLowerCase() >>>  Cart >> cart