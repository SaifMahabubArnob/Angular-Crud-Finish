import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/users'; // তোমার JSON Server বা Backend API URL

  constructor(private http: HttpClient) { }

  // **READ: সব ইউজার নিয়ে আসার জন্য মেথড**
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // GET request
  }

  // **CREATE: নতুন ইউজার যোগ করার জন্য মেথড**
  addUser(newUser: { name: string; email: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, newUser); // POST request
  }

  // **UPDATE: নির্দিষ্ট ইউজারের তথ্য আপডেট করার জন্য মেথড**
  updateUser(id: number, updatedUser: { name: string; email: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedUser); // PUT request
  }

  // **DELETE: নির্দিষ্ট ইউজার ডিলিট করার জন্য মেথড**
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // DELETE request
  }
}
