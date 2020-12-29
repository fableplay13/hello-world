import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TestPhotoComponent } from './test-native/test-photo/test-photo.component';

@NgModule({
    declarations: [
        TestPhotoComponent
    ],
    entryComponents: [TestPhotoComponent],
    imports: [
        CommonModule
    ],
    providers: [
        Camera
    ],
    exports: [
        TestPhotoComponent
    ],
    schemas: [ 
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA 
    ]
})
export class SharedModule {
}
