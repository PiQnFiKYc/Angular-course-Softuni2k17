import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth-service/auth.service";
import {ToastrService} from "../../services/toastr-service/toastr.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  username: string;
  password: string;
  repeatedPassword: string;

  // TODO:add toastr
  constructor(private router: Router,
              private auth: AuthService,
              private toastr:ToastrService) {
  }

  ngOnInit() {
  }

  getBack() {
    window.history.back();
  }

  submitRegister() {
    const message = this.auth.validateRegisterForm(this.username, this.email, this.password, this.repeatedPassword);
    if(!message.success){
      this.toastr.errorToast(message.error);
      return;
    }
    this.toastr.toast('Registering..');
    this.auth.register(this.username, this.email, this.password).subscribe(
      data => {
        if (data.isAdmin) {
          localStorage.setItem('role', data._kmd._id);
        } else {
          localStorage.setItem('role', 'init');
        }
        this.toastr.successToast('Successful registration.');
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        this.router.navigate(['/catalog']);
      },
      err => {
        this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      }
    );
  }

}
