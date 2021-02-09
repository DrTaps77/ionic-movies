import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActeursPageRoutingModule } from './acteurs-routing.module';

import { ActeursPage } from './acteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActeursPageRoutingModule
  ],
  declarations: [ActeursPage]
})
export class ActeursPageModule {}
