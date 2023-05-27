import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { LayoutsComponent } from './layouts/layouts.component';
// import { PageComponent } from './page/page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LayoutsComponent,
    // PageComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    AboutPageComponent,
    AdminComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    DashboardComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
