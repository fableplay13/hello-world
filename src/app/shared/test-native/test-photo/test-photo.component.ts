import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-test-photo',
  templateUrl: 'test-photo.component.html',
  styleUrls: ['test-photo.component.scss']
})
export class TestPhotoComponent implements OnInit {
  constructor(public photoService: PhotoService) { }
  ngOnInit() {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}