import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from '@angular/router';
// import {ToastrService} from "../../services/toastr-service/toastr.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
//TODO add toastr
  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {

  }

  getBack() {
    window.history.back();
  }

  submitLogin() {
    // this.toastr.toast('Logging in..');
    this.auth.login(this.username, this.password).subscribe(data => {
        if (data.isAdmin) {
          localStorage.setItem('role', data._id);
        } else {
          localStorage.setItem('role', 'init');
        }
        // this.toastr.successToast('Successful login.');
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        this.router.navigate(['/catalog']);
      },
      err => {
        console.log(err);
        // this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }
}
