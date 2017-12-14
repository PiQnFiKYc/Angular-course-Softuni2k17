import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {RouterAuthService} from "../../services/router-auth-service/router-auth.service";
import {CatalogService} from "../../services/catalog-service/catalog.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  locations;
  location:string;
  name: string;
  description: string;
  imgUrl: string;
  isVisible: boolean;

  constructor(private router: Router,
              private toastr: ToastrService,
              private routerAuth: RouterAuthService,
              private catalogService: CatalogService) {
  }

  ngOnInit() {
    
  }

  submitAddProduct() {
    // if (this.tags === undefined) {
    //   this.toastr.errorToast('Please specify product categories in the tags field.');
    //   return;
    // }
    if (this.location === '') {
      this.toastr.errorToast('Please specify location.');
      return;
    }
    this.isVisible = false;
    // this.tags = this.tags.split(',').map(t => {
    //   if (t !== ' ' || t !== '') {
    //     return t.trim();
    //   }
    // });

    this.catalogService.addProduct(this.name, this.description, this.imgUrl, this.location, this.isVisible).subscribe(data => {
        this.toastr.successToast('Product added.');
        this.router.navigate(['/catalog']);
      },
      err => {
        this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });

  }

  getBack() {
    window.history.back();
  }

}
