import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpecsComponent} from './specs/specs.component';
import {OpenweatherService} from './services/openweather.service';

@NgModule({
  declarations: [
    AppComponent, SpecsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [OpenweatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
