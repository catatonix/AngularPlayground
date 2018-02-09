import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import Spark from './data/Spark';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router/src/router_module';

const routes: Routes = [
  { path: 'demo', loadChildren: './dmeo/demo.module#DemoMoudle' },
  { path: '**', redirectTo: 'demo' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  providers: [Spark],
  bootstrap: [AppComponent]
})
export class AppModule { }
