import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string,
  userName: string,
  email: string
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  AddPost(body: any) {
    return this.http.post('http://localhost:3000/posts', body)
  };

  getPost() {
    return this.http.get('http://localhost:3000/posts');
  };

  deletePost(id:number): Observable<object>{
    return this.http.delete('http://localhost:3000/posts/' +id)
  };

  updatePost(id:number){
    const putBody = {
      description: 'ABC Tutorial',
    }
    
    return this.http.put('http://localhost:3000/posts/' +id, putBody)
  }
}
