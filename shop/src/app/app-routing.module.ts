import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  {path:'products', component : ProductComponent},
  {path:'product-add-form1', component : ProductAddForm1Component, canActivate:[LoginGuard]},
  {path:'product-add-form2', component : ProductAddForm2Component},
  {path:'', redirectTo: 'products', pathMatch:'full'},
  {path:'products/category/:categoryId', component:ProductComponent},
  {path:'login', component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
