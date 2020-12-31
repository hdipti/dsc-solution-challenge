import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../core/data/model/Candidate';
import { CandidateService } from '../core/data/service/CandidateService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    candidate: Candidate;
    savedCandidate: Candidate;
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private candidateService: CandidateService,
        private formBuilder: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
            description:['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.save();
    }

    populateCandidateDetails() {
        this.candidate = new Candidate();
        this.candidate.firstName = this.form.get('firstName').value;
        this.candidate.lastName = this.form.get('lastName').value;
        this.candidate.email = this.form.get('email').value;
        this.candidate.description = this.form.get('description').value;
        this.candidate.userName = this.form.get('username').value;
        this.candidate.password = this.form.get('password').value;

    }

    save() {

        this.populateCandidateDetails();
        this.candidateService.createCandidate(this.candidate)
        .subscribe(
            data => {
            console.log(data);
            this.savedCandidate = data;
            },
            error => console.log(error));
        this.candidate = new Candidate();
		this.gotoList();
    }

    gotoList() {
    	this.router.navigate(['/login']);
  	}
}
