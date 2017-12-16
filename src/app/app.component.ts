import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

interface donor {
  name: string;
  phone: number;
  group: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  donorCollection: AngularFirestoreCollection<donor>;
  donors: Observable<donor[]>;
  name:string;
  phone:number;
  group:string;

  constructor(private afs: AngularFirestore){}
  ngOnInit(){
    this.donorCollection = this.afs.collection('donors');
    this.donors = this.donorCollection.valueChanges();
  }

  addDonor(){
    this.afs.collection('donors').add({'name': this.name, 'group': this.group,'phone':this.phone});
  }
}
