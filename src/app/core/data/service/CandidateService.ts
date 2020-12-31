import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
	
	private baseUrl = 'http://[::1]:8080/api/candidates';
	corsUrl = 'https://cors-anywhere.herokuapp.com/';
	  httpOptions = {
	      headers: new HttpHeaders({
	        'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept',
	        'Access-Control-Allow-Methods': 'GET'//,
	       // 'Content-Type': 'application/ms-excel'
	      }),
	      //responseType: 'text' as 'text'
	    }; 
	
	constructor(private http: HttpClient) { }
	
	getCandidate(id: number): Observable<any> {
		return this.http.get(`${this.corsUrl}`+`${this.baseUrl}/${id}`, this.httpOptions);
	}

	createCandidate(candidate: any): Observable<any> {
		return this.http.post(this.baseUrl, candidate);
	}

	updateCandidate(id: number, value: any): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	deleteCandidate(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}
	
	getCandidatesList(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
	
	getCandidatesByFirstName(firstName: string): Observable<any> {
		return this.http.get(`${this.baseUrl}/firstName/${firstName}`);
	}
	
	deleteAll(): Observable<any> {
		return this.http.delete(this.baseUrl);
	}
	
	getCandidateByLoginDetails(username: string, password: string): Observable<any> {
		return this.http.get(`${this.corsUrl}`+`http://localhost:8080/api/login?username=${username}&password=${password}`, this.httpOptions);
	}
	
}