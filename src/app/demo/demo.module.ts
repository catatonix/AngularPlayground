import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

import Spark from '../data/Spark';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent],
  providers: [Spark]
})
export class DemoModule { }
