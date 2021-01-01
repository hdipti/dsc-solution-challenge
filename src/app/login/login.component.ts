import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../core/data/model/Candidate';
import { CacheService } from '../core/data/service/CacheService';
import { CandidateService } from '../core/data/service/CandidateService';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
    form: FormGroup;
    loading = false;
    submitted = false;
	userFound = false;
	candidates: Candidate[] = [];

    constructor(
      private cacheService: CacheService,
	  private candidateService: CandidateService,
      private formBuilder: FormBuilder,
      private router: Router,
    ) {	}

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
		this.candidateService.getCandidatesList()
		.subscribe(
		 data => { 
			this.candidates = data;
		    console.log(this.candidates);
		    this.candidates.forEach(candidate => { 
				if(!this.userFound && candidate.username === this.form.get('username').value &&
				   candidate.password === this.form.get('password').value){
					this.cacheService.set("candidates", this.candidates)
					this.loginSuccess();
				};
		  	})
		  },
		  error => {
			console.log(error);
			this.router.navigate(['/error']);
		});
		this.router.navigate(['/access-denied']);
	}

    loginSuccess() {
		this.userFound = true;
		localStorage.setItem('username', this.form.get('username').value);
		localStorage.setItem('isLoggedin', 'true');
    	this.router.navigate(['/team-finder']);
		
  	}

}
