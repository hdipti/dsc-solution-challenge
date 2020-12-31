import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

	private baseUrl = 'http://localhost:8080/api/logins';
	
	constructor(private http: HttpClient) { }
	
	getLogin(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	createLogin(login: any): Observable<any> {
		return this.http.post(this.baseUrl, login);
	}

	updateLogin(id: number, value: any): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	deleteLogin(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}
	
	getLoginsList(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
	
	getLoginsByUsername(username: string, password: string): Observable<any> {
		return this.http.get(`${this.baseUrl}/username/${username}/password/${password}`);
	}
	
	deleteAll(): Observable<any> {
		return this.http.delete(this.baseUrl);
	}
    
}