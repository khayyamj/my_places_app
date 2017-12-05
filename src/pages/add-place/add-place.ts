import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular';

import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location = {
    lat: 40.234,
    lng: -111.659
  }
  locationIsSet = false;

  constructor(private modalCtrl: ModalController,
              private geolocation: Geolocation) {}

  onSubmit(form: NgForm) {
    console.log('form: ', form.value);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, {location: this.location, isSet: this.locationIsSet});
    modal.present();
    modal.onDidDismiss(mapData => {
      if (mapData) {
        this.location = mapData.location;
        this.locationIsSet = true;
      }
    });
  }

  onLocate() {
    this.geolocation.getCurrentPosition()
      .then(location => {
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
      })
      .catch(error => console.log(error));
  }
}
