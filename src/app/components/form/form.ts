import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
 @Output() search = new EventEmitter<string>();
  reactiveForm = new FormGroup({
    name: new FormControl('')
  });

  onSubmit() {
    this.search.emit(this.reactiveForm.value.name ?? '');
    this.reactiveForm.reset();
  }
}
