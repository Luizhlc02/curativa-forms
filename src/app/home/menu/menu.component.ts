import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { BoletoFormsComponent } from "../../forms/boleto-forms/boleto-forms.component";

@Component({
  selector: 'app-menu',
  imports: [
    TabsModule,
    BoletoFormsComponent
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
