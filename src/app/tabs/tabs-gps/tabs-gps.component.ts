import { Component, OnInit } from "@angular/core";

import { Plugins } from "@capacitor/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tabs-gps',
  templateUrl: 'tabs-gps.component.html',
  styleUrls: ['tabs-gps.component.scss']
})
export class TabsGpsComponent implements OnInit {
  lat: number;
  lng: number;
  address: string;

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.getCurrentLocation();
  }
  getCurrentLocation() {
    Plugins.Geolocation.getCurrentPosition().then(result => {
      this.lat = result.coords.latitude;
      this.lng = result.coords.longitude;
      this.getAddress(this.lat, this.lng).subscribe(decodedAddress => {
        this.address = decodedAddress;
        console.log(this.address);
      });
    });
  }
  private getAddress(lat: number, lan: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${environment.GM_API_KEY}`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results === 0) {
            return null;
          }
          // console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${environment.GM_API_KEY}`)
          return geoData.results[0].formatted_address;
        })
      );
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.address,
      position: "middle",
      buttons: [
        {
          icon: "close-circle",
          role: "cancel"
        }
      ]
    });
    toast.present();
  }
  onMarkerClick() {
    this.presentToast();
  }
}