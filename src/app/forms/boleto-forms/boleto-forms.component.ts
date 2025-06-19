import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ViewComponent } from "../view/view.component";
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-boleto-forms',
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    FloatLabelModule,
    ViewComponent,
    FileUploadModule
],
  templateUrl: './boleto-forms.component.html',
  styleUrl: './boleto-forms.component.scss'
})
export class BoletoFormsComponent {

  value: any
}
