import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsComponent } from './tabs.component';
import { TabsCameraComponent } from './tabs-camera/tabs-camera.component';
import { TabsGpsComponent } from './tabs-gps/tabs-gps.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsComponent,
    TabsCameraComponent,
    TabsGpsComponent
  ]
})
export class TabsPageModule {}