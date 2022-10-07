import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidasxtipoPage } from './comidasxtipo.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasxtipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasxtipoPageRoutingModule {}
