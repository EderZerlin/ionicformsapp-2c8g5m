import { Component } from '@angular/core';

//Importacoes necessarias para formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
* Para funcionar os formularios, precisamos importar (adicionar)
* O modulo ReactiveFormsModule no arquivo .module.ts
*/


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
