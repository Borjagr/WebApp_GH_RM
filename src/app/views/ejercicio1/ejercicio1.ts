import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Examen } from '../../services/examen';
import { GitHub } from '../../interfaces/examen.interfaces';
import { Form } from '../../components/form/form';
import { Github } from '../../components/github/github';

@Component({
  selector: 'app-ejercicio1',
  imports: [CommonModule, Form, Github],
  templateUrl: './ejercicio1.html'
})
export class Ejercicio1 {
  users: any[] = [];
  searchTerm: string = '';
  showResults: boolean = false;
  selectedUser: any = null;

  constructor(public service: Examen) {}

  onSearch(term: string) {
    this.searchTerm = term;
    this.service.getUsers(term).subscribe((data: GitHub) => {
      this.users = data.items.slice(0, 6);
      this.showResults = true;
      this.selectedUser = null;
    });
  }

  onUserSelected(user: any) {
    this.selectedUser = user;
  }

  onReset() {
  this.showResults = false;
  this.selectedUser = null;
  this.users = [];
  this.searchTerm = '';
}

onBackToPhotos() {
  this.selectedUser = null;
}
}