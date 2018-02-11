import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material';
import User from '../../models/User';
import UserService from '../../services/UserService';



@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private service: UserService
  ) { }

  name = new FormControl('', [Validators.required]);
  
    getErrorMessage() {
      return this.name.hasError('required') ? 'You must enter a name' : '';
    }

  ngOnInit() {
    this.user = new User();
  }

  save(){
    this.service.addUser(this.user).then(usr => {
      console.log(usr);
    });
  }

  dismiss(){
    this.dialogRef.close(null);
  }

}
