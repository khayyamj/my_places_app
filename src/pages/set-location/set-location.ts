import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Location } from '../../models/location';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  location: Location;
  marker: Location;

  constructor(private navParams: NavParams) {
    this.location = this.navParams.get('location');
  }

  onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

}
