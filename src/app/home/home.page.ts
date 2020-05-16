import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  public formLogin: FormGroup;

  public mensagens_validacao = {
    email:[
      { tipo: 'required', mensagem: 'O campo e-mail e obrigatorio' },
      { tipo: 'email', mensagem: 'E-mail invalido!'},
    ],
    senha: [
      { tipo: 'required', mensagem: 'E obrigatorio digitar a senha' },
      { tipo: 'minLength', mensagem: 'A senha deve ter pelo o menos 6 carcacteres.' },
      { tipo: 'maxLength', mensagem: 'A senha deve ter no maximo 8 caracteres.' }
    ]
  };

  constructor(public formBuilder: FormBuilder, public alertController: AlertController) {

    // Monta formularios
    this.formLogin = formBuilder.group({
      // Declara os campos do formulario.
      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(8), Validators.required])]
    });
  }

  public login(){
    if(this.formLogin.valid){

    }else{
      this.alertFormInvalid();
    }
  }

  async alertFormInvalid(){
    const alert = await this.alertController.create({
      header: 'Erro!!!',
      message: 'Formulario invalido, confira os dados!',
      buttons: ['Ok']
    });

    await alert.present();
  }
}
