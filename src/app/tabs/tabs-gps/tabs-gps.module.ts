import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TabsGpsComponent } from "./tabs-gps.component";

import { AgmCoreModule } from "@agm/core";

import { environment } from "./../../../environments/environment";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: TabsGpsComponent }]),
    AgmCoreModule.forRoot({
      apiKey: environment.GM_API_KEY
    })
  ],
  declarations: [TabsGpsComponent]
})
export class TabsGpsComponentModule {}