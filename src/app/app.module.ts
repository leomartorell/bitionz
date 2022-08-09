import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MobileSidenavComponent } from './components/mobile-sidenav/mobile-sidenav.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BzServicesComponent } from './pages/bz-services/bz-services.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MobileSidenavComponent,
    NavListComponent,
    PopUpComponent,
    CarouselComponent,
    BzServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
