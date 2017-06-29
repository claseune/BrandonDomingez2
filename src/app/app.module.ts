import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {DatosPage} from '../pages/datos/datos';
import {LoginPage} from '../pages/login/login';
import {GestosPage} from '../pages/gestos/gestos';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const config = {
    apiKey: "AIzaSyBFlFtG3-bu-HnlTwsN3BChOx5ZErelYXc",
    authDomain: "conexion-eb121.firebaseapp.com",
    databaseURL: "https://conexion-eb121.firebaseio.com",
    projectId: "conexion-eb121",
    storageBucket: "conexion-eb121.appspot.com",
    messagingSenderId: "249651220654"
  }

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatosPage,
    LoginPage,
    GestosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatosPage,
    LoginPage,
    GestosPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
