import { Component, OnInit } from '@angular/core';
import { SearchType } from './search-type.enum';

@Component({
    selector: 'tta-search',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {

    //searchPlaceholderText: string;
    //selectedType: SearchType;

    constructor() { }

    ngOnInit() {
        //this.selectedType = SearchType.Destination;
        //this.setSearchPlaceholderText();
    }

    onCriteriaChanged(event) {
        //this.selectedType = event.detail.value;
        //this.setSearchPlaceholderText();
    }
    
    /*
    private setSearchPlaceholderText() {
        /*this.searchPlaceholderText = this.selectedType === SearchType.Destination ?
            `Where do you want to go?` : 'How much do you want to spend?';
    }
    */


}
