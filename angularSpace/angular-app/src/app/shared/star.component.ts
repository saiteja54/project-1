import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges {
   
    starWidth:number ;
    @Input() rating:number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log("Rating value received on child component ", this.rating);
        this.starWidth = this.rating * 70/5;
        console.log("Star width value :: ", this.starWidth);
    }

    onClick(): void{
        console.log(`Rating ${this.rating} is clicked `);
        this.ratingClicked.emit(`Rating ${this.rating} is clicked `);
    }
}