import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {CatalogService} from "../../services/catalog-service/catalog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.css']
})
export class LandmarkComponent implements OnInit {
  @Input() landmark;
  isVisible:boolean;
  @Input() permissions;
  @Input() tags;
  @Input() catalog;
  isAdmin;

  constructor(private toastr: ToastrService,
              private catalogService: CatalogService,
              private router: Router) {
  }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('role') !== 'init';
    this.isVisible=this.landmark.isVisible;
    console.log(this.isVisible);
  }
}
