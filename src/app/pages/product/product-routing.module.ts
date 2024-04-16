import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductAddComponent} from "./product-add/product-add.component";

const routes: Routes = [

  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'detail',
        component: ProductDetailComponent
      },
      {
        path: 'add',
        component: ProductAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
