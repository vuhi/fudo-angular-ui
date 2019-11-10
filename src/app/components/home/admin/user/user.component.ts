import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  displayedColumns: string[] = ['id', 'name', 'email', 'totalPost', 'status', 'action'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  totalPost: number;
  status: string;
}

const ELEMENT_DATA: User[] = [
  { id: 1, name: 'Hydrogen', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 2, name: 'Helium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 3, name: 'Lithium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 4, name: 'Beryllium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'block'},
  { id: 5, name: 'Boron', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'block'},
  { id: 50, name: 'Carbon', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'block'},
  { id: 7, name: 'Nitrogen', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 8, name: 'Oxygen', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 9, name: 'Fluorine', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 10, name: 'Neon', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'block'},
  { id: 11, name: 'Sodium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 12, name: 'Magnesium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 13, name: 'Aluminum', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 14, name: 'Silicon', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'block'},
  { id: 15, name: 'Phosphorus', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 150, name: 'Sulfur', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 17, name: 'Chlorine', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 18, name: 'Argon', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 19, name: 'Potassium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
  { id: 20, name: 'Calcium', email: 'abc@gmail.com', totalPost: Math.floor(Math.random() * 50) + 1, status: 'active'},
];
