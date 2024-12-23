import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import {ProductsService} from "./services/products.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ButtonDirective } from './directives/button.directive';
import { TextPipe } from './pipes/text.pipe';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AdvantageComponent,
    ButtonDirective,
    TextPipe,
    PhonePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
