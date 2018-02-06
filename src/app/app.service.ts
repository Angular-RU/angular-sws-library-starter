import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  loadUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users');
  }

  loadUsersNull(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://demo8448162.mockable.io/users_null');
  }

  loadUsersErr(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://example.com/users', {});
  }

}
