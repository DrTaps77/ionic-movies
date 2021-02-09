import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActeursPage } from './acteurs.page';

const routes: Routes = [
  {
    path: '',
    component: ActeursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActeursPageRoutingModule {}
