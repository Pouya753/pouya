import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
  },

  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
