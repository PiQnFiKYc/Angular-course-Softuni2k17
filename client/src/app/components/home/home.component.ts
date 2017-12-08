import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../../services/locations-service/location.service";
// import {ToastrService} from "../../services/toastr-service/toastr.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mapLoaded = false;
  constructor(private locationsService: LocationsService,
             ) { }

  ngOnInit() {
    // this.toastr.toast('Loading locations..');
    this.locationsService.loadMainMap();
    this.mapLoaded = true;
  }
}