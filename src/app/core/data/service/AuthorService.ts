import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
	
	private baseUrl = 'http://localhost:8080/api/authors';
	
	constructor(private http: HttpClient) { }
	
	getAuthor(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	createAuthor(author: any): Observable<any> {
		return this.http.post(this.baseUrl, author);
	}

	updateAuthor(id: number, value: any): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	deleteAuthor(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}
	
	getAuthorsList(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
	
	getAuthorByAuthorName(name: string): Observable<any> {
		return this.http.get(`${this.baseUrl}/authorname/${name}`);
	}
	
	deleteAll(): Observable<any> {
		return this.http.delete(this.baseUrl);
	}
		
}