import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminAddComponent } from './admin-add/admin-add.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminListComponent,
    AdminDetailComponent,
    AdminAddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
