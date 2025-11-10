import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
 isHovering: boolean = false;
 isHovering2: boolean = false;

 onMouseEnter() {
   this.isHovering = true;
 }

 onMouseLeave() {
   this.isHovering = false;
  }

  onMouseEnter2() {
    this.isHovering2 = true;
  }

  onMouseLeave2() {
    this.isHovering2 = false;
  }

}
