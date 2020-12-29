import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TestPhotoComponent } from './test-native/test-photo/test-photo.component';
import { TestPhotoFncComponent } from './test-native/test-photo-fnc/test-photo-fnc.component';

@NgModule({
    declarations: [
        TestPhotoComponent,
        TestPhotoFncComponent
    ],
    entryComponents: [TestPhotoFncComponent],
    imports: [
        CommonModule
    ],
    providers: [
        Camera
    ],
    exports: [
        TestPhotoComponent,
        TestPhotoFncComponent
    ],
    schemas: [ 
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA 
    ]
})
export class SharedModule {
}
