import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../shared/services/camera.service';

@Component({
  selector: 'app-tabs-camera',
  templateUrl: 'tabs-camera.component.html',
  styleUrls: ['tabs-camera.component.scss']
})
export class TabsCameraComponent implements OnInit {
  constructor(public photoService: CameraService) { }
  ngOnInit() {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}