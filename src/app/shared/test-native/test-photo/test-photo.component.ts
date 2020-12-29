import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test-photo',
  templateUrl: 'test-photo.component.html',
  styleUrls: ['test-photo.component.scss']
})
export class TestPhotoComponent implements OnInit {
  constructor(private camera: Camera) { }
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  ngOnInit() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     });
  }
}
