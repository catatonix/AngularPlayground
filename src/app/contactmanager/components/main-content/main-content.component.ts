import { Component, OnInit } from '@angular/core';

import User from '../../models/User';
import { ActivatedRoute } from '@angular/router';
import UserService from '../../services/UserService';
import { memory } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute, 
    private service: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.user = this.service.userById(id);
      this.service.users.subscribe(users => {
        if (users.length == 0) return;
        this.user = this.service.userById(id);
      })
    });
  }

}
