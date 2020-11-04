import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchSiteComponent } from './main-page/search-site/search-site.component';
import { FilterComponent } from './main-page/filter/filter.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchSiteComponent,
    FilterComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
