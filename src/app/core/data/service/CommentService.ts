import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CommentService {
	
	private baseUrl = 'http://localhost:8080/api/comments';
	
	constructor(private http: HttpClient) { }
	
	getComment(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	createComment(comment: any): Observable<any> {
		return this.http.post(this.baseUrl, comment);
	}

	updateComment(id: number, value: any): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	deleteComment(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}
	
	getCommentsList(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
	
	getCommentsByPostId(postId: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/postId/${postId}`);
	}
	
	deleteAll(): Observable<any> {
		return this.http.delete(this.baseUrl);
	}
    
}