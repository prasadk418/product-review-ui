import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routes'
import { AppComponent } from './app.component';
/*import { SharedModule } from './shared/shared.module';*/
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
/*import {  ProductSearchPipe } from './shared/pipes/productsearch.pipe.';*/
import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AppHttpClientService } from './apphttpclient.service';
import { AuthenticationModel } from './shared/models/AuthenticationModel';
import { LoginCheckAuthguard } from './shared/services/logincheck.authguard';



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRouting, 
    /*SharedModule,*/
    HttpModule,
    HttpClientModule   
  ],
  providers: [ProductService, AppHttpClientService, AuthenticationModel, LoginCheckAuthguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
