import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedMaterialModule } from 'src/app/modules/shared-material/shared-material.module';
// import { ProductListListComponent } from 'src/app/components/product-list-list/product-list-list.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CartRoutingModule,
        SharedMaterialModule,
    ]
})
export class CartModule { }
