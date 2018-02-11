import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import Spark from '../data/Spark';
import UserService from './services/UserService';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }      
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent],
  providers: [UserService, Spark],
  entryComponents:[
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }
