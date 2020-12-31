import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate } from '../../core/data/model/Candidate';

@Injectable()
export class AuthGuard implements CanActivate {

private currentUserSubject: BehaviorSubject<Candidate>;
    public currentUser: Observable<Candidate>;

    constructor(private router: Router,
				private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Candidate>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Candidate {
        return this.currentUserSubject.value;
    }

	 logout() {
	        // remove user from local storage to log user out
	        localStorage.removeItem('currentUser');
	        this.currentUserSubject.next(null);
	 }
	
    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/team-finder']);
        return false;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:4200/api/login`, { username, password })
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

   
}
