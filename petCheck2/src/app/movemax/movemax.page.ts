import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';
import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-movemax',
  templateUrl: './movemax.page.html',
  styleUrls: ['./movemax.page.scss'],
})
export class MovemaxPage implements OnInit {
  max;
  disease;
  hos = [];
  constructor(
    public db: AngularFireDatabase,
    public st: AngularFireStorage,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.max = this.activatedRoute.snapshot.paramMap.get('p');
    this.disease = this.activatedRoute.snapshot.paramMap.get('d');
    this.db.list('hospital/', ref => ref.orderByChild('np').equalTo(`${this.disease}_${this.max}`)).valueChanges().subscribe(
      data => {
        this.hos = data;
    });
  }

}
