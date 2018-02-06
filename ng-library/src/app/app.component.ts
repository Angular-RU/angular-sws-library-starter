import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Observable} from "rxjs/Observable";
import {delay} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users$: Observable<Array<any>>;
  users: Array<any>;

  constructor(private service: AppService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.service.loadUsers().pipe(delay(2000));
  }

  setUsers(users: Array<any>){
    this.users = users;
  }

  refresh(){
    let obs = this.service.loadUsers().pipe(delay(2000));
    this.users$ = obs;
  }

  getError(){
    let obs = this.service.loadUsersErr().pipe(delay(2000));
    this.users$ = obs;
  }

  getNull(){
    let obs = this.service.loadUsersNull().pipe(delay(2000));
    this.users$ = obs;
  }
}
