import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidasxtipoPageRoutingModule } from './comidasxtipo-routing.module';

import { ComidasxtipoPage } from './comidasxtipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasxtipoPageRoutingModule
  ],
  declarations: [ComidasxtipoPage]
})
export class ComidasxtipoPageModule {}
