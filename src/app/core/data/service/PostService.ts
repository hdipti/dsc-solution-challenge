import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PostService {

	private baseUrl = 'http://localhost:8080/api/posts';
	
	constructor(private http: HttpClient) { }
	
	getPost(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	createPost(post: any): Observable<any> {
		return this.http.post(this.baseUrl, post);
	}

	updatePost(id: number, value: any): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	deletePost(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}
	
	getPostsList(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
	
	getPostsByAuthorId(authorId: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/authorId/${authorId}`);
	}
	
	deleteAll(): Observable<any> {
		return this.http.delete(this.baseUrl);
	}
    
}