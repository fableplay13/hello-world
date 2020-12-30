import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../shared/services/camera/camera.service';

@Component({
  selector: 'app-tabs-camera',
  templateUrl: 'tabs-camera.component.html',
  styleUrls: ['tabs-camera.component.scss']
})
export class TabsCameraComponent implements OnInit {
  constructor(public photoService: CameraService) { }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  trashPhotoFromGallery(photo: any, i: number) {
    this.photoService.removePhotoFromGallery(photo, i);
  }
}