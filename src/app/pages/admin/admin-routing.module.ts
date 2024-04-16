import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminListComponent} from "./admin-list/admin-list.component";
import {AdminDetailComponent} from "./admin-detail/admin-detail.component";
import {AdminAddComponent} from "./admin-add/admin-add.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: AdminListComponent
      },
      {
        path: 'detail',
        component: AdminDetailComponent
      },
      {
        path: 'add',
        component: AdminAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
