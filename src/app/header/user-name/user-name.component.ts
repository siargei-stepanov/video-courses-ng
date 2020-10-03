import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.less']
})
export class UserNameComponent implements OnInit {
  public user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      id: 1,
      firstName: 'Harry',
      lastName: 'Potter'
    }
  }

}
