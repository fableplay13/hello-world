import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-test-photo-fnc',
  templateUrl: 'test-photo-fnc.component.html',
  styleUrls: ['test-photo-fnc.component.scss']
})
export class TestPhotoFncComponent implements OnInit {
  constructor(public photoService: PhotoService) { }
  ngOnInit() {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}