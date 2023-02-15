import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product-list-list',
  templateUrl: './product-list-list.component.html',
  styleUrls: ['./product-list-list.component.scss']
})
export class ProductListListComponent {
  @Input()
  item_cart: any

  // @Output()
  // itemCartChang= new EventEmitter()

  // added(itemProduct: any)
  // {
  //   this.itemDataChange.emit(itemProduct)
  // }
}
