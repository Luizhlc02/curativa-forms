import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";


@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink,
    FormsModule,

  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  nome: string = "Luiz";

  logout(){
    
  }
}
