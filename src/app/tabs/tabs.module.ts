import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsComponent } from './tabs.component';
import { TabsCameraComponent } from './tabs-camera/tabs-camera.component';
import { TabsGpsComponentModule } from './tabs-gps/tabs-gps.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TabsGpsComponentModule
  ],
  declarations: [
    TabsComponent,
    TabsCameraComponent
  ]
})
export class TabsPageModule {}