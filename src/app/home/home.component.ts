import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-home',
  imports: [
    NavBarComponent,
    MenuComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
