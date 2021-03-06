import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import Note from '../../models/Note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent  {

  @Input() notes: Note[];

  displayedColumns = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;    
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    
        this.dataSource = new MatTableDataSource<Note>(changes.notes.currentValue);
        // You can also use categoryId.previousValue and 
        // categoryId.firstChange for comparing old and new values
    }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim(); // remove whitespace;
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches;
    this.dataSource.filter = filterValue;
  }

}
