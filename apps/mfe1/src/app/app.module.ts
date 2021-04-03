import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsSearchComponent } from './flights/flights-search/flights-search.component';
import { APP_ROUTES } from './app.routes';
import { FlightsModule } from './flights/flights.module';
import { AuthModule } from '@mfe-nx/auth';

@NgModule({
  declarations: [AppComponent, HomeComponent, FlightsSearchComponent],
  imports: [
    BrowserModule,
    FlightsModule,
    AuthModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
