import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatFormFieldModule, MatSelectModule, MatInputModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyDnrJoZ2GKbLisPx7JiBspgnHLHcRL06TA",
  authDomain: "angular-firebase-demo-84d89.firebaseapp.com",
  databaseURL: "https://angular-firebase-demo-84d89.firebaseio.com",
  projectId: "angular-firebase-demo-84d89",
  storageBucket: "angular-firebase-demo-84d89.appspot.com",
  messagingSenderId: "936237151459"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
