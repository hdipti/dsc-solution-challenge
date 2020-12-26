import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Login } from '../core/data/model/Login';
import { LoginService } from '../core/data/service/LoginService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    login: Login = new Login();
    submitted = false;

    constructor(
      private loginService: LoginService,
      public router: Router
    ) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    /// implement get login based on username

}
