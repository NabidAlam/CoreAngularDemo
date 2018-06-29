import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
   // styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick() {
        // this.notify.emit("clicked");
        console.log('This rating ${this.rating} was clicked');
    }
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    //constructor() {
    //    this.rating = 5;
    //    this.starWidth = 0;
    //}

}