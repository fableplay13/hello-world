import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { TabsCameraComponent } from './tabs-camera/tabs-camera.component';
import { TabsGpsComponent } from './tabs-gps/tabs-gps.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'camera',
        children: [
          {
            path: '',
            component: TabsCameraComponent
          }
        ]
      },
      {
        path: 'gps',
        children: [
          {
            path: '',
            component: TabsGpsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}