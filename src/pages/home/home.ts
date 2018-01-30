import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dados;

  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  buscarDados(){
    this.http
      .get('https://api.fixer.io/latest')
      .subscribe((resposta) => {
        this.dados = resposta;
      });
  }

}