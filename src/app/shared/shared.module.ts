import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './service/photo/photo.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PhotoComponent
    ],
    exports: [
        PhotoComponent
    ],
    schemas: [ 
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA 
    ]
})
export class SharedModule {
}
