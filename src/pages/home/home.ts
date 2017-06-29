import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatosPage} from '../datos/datos';
import {LoginPage} from '../login/login';
import {GestosPage} from '../gestos/gestos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  load()
  {
this.navCtrl.push(GestosPage,
{
val: 'true'
})
  }

  loadLogin()
  {
this.navCtrl.push(LoginPage,
{
val: 'true'
})
  }

  loadData()
  {
this.navCtrl.push(DatosPage,
{
val: 'true'
})
  }


}
