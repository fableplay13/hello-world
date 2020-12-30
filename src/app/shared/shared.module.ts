import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        CommonModule
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
