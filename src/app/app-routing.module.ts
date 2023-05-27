import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      {path: "", component: HomePageComponent},
      {path: "about", component: AboutPageComponent},
      {path: "product/:id", component: ProductDetailComponent},
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {path: "", redirectTo: "dashboard", pathMatch: "full"},
      {path: "dashboard", component: DashboardComponent},
      {path: "product", component: ProductsListComponent},
      {path: "product/add", component: AddProductComponent},
      {path: "product/:id/edit", component: UpdateProductComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
