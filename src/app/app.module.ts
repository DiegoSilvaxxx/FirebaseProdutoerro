import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../config/firebase.config';
import {AngularFirestoreModule} from 'angularFire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { ClienteService } from '../service/cliente.service';



@NgModule({
  declarations: [
    MyApp,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    //configuração do servidor(firebase.config.ts)
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,//Serviço de autenticação(Authentication)
    ClienteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
