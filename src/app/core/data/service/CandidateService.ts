import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
	
	private baseUrl = 'http://localhost:8080/api/candidates';
	
	constructor(private http: HttpClient) { }
	
	getCandidate(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
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
    
}