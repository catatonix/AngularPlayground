import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class DemoModule { }
