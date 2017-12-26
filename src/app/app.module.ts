import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HeaderComponent } from './hotel/header/header.component';
import { MainComponent } from './hotel/main/main.component';
import { NavComponent } from './hotel/main/nav/nav.component';
import { HotelViewComponent } from './hotel/main/hotel-view/hotel-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    HotelViewComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
