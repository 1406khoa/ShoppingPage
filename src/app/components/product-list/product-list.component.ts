import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
@Input()
itemProduct: any

@Output()
itemDataChange = new EventEmitter()

// @Output() addCartCallBack: EventEmitter(any) = new EventEmitter();;

addItems(itemProduct: any)
  {
    this.itemDataChange.emit(itemProduct)
  }
}
