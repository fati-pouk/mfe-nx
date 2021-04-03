import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthModule } from '@mfe-nx/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ]
})
export class FlightsModule { }
