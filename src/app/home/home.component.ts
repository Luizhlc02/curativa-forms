import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MenuComponent } from "./menu/menu.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  imports: [
    NavBarComponent,
    MenuComponent,
    HttpClientModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
