import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'tobuy-list',
  templateUrl: './tobuy-list.component.html',
  styleUrls: ['./tobuy-list.component.css'],

})
export class TobuyListComponent implements OnInit {



  items = []


  constructor() { }

  onAdd(newItem, myForm) {
    this.items.push(newItem.value);
    myForm.reset();

  }

  removeItem(newItem) {
    let index = this.items.indexOf(newItem);
    this.items.splice(index, 1);

  }






  ngOnInit() {
  }

}
