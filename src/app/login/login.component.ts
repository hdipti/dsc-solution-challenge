import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../core/data/model/Candidate';
import { Login } from '../core/data/model/Login';
import { CandidateService } from '../core/data/service/CandidateService';
import { LoginService } from '../core/data/service/LoginService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
    candidate: Candidate;
	login: Login;
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
      private candidateService: CandidateService,
	  private loginService: LoginService,
      private formBuilder: FormBuilder,
      private router: Router,
    ) {}

    ngOnInit() {
	 	this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
		 });
	}

    onLoggedin() {
		this.submitted = true;
		this.checkLoginDetails();
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    checkLoginDetails(){
		this.loginService.getLoginsByUsername(this.form.get('username').value, this.form.get('password').value)
		//this.candidateService.getCandidatesList()
        .subscribe(
            data => {
            console.log(data);
			this.loginSuccess();
            },
            error => {
				this.router.navigate(['/access-denied']);
				console.log(error);
			});
        this.candidate = new Candidate();
	}

    loginSuccess() {
		localStorage.setItem('username', this.form.get('username').value);
		localStorage.setItem('isLoggedin', 'true');
    	this.router.navigate(['/team-finder']);
  	}

}
