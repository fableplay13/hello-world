import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        Camera
    ],
    exports: [],
    schemas: [ 
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA 
    ]
})
export class SharedModule {
}
