import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.html',
  styleUrl: './github.css'
})
export class Github {
 @Input() users: any[] = [];
  @Input() searchTerm: string = '';
  @Input() selectedUser: any = null;
  @Output() userSelected = new EventEmitter<any>();
  @Output() reset = new EventEmitter<void>();

  selectUser(user: any) {
    this.userSelected.emit(user);
  }

  onReset() {
    this.reset.emit();
  }

  onBackToPhotos() {
    this.selectedUser = null;
  }
}
