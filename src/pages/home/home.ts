import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  valor;
  entrada;

  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  buscarDados(){
    this.http
      .get<any>('https://api.fixer.io/latest?base=BRL')
      .subscribe((resposta) => {
        this.valor = this.entrada * resposta.rates.USD;
      });
  }

}