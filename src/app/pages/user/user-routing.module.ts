import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserAddComponent} from "./user-add/user-add.component";

const routes: Routes = [


  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'detail',
        component: UserDetailComponent
      },
      {
        path: 'add',
        component: UserAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
