import { Component, OnInit} from '@angular/core';
import { NavController , AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  val = '';
  posts = [];
  avg = 0;
  max = 0;
  min = 0;
  queryTxt: string;
  constructor(
    public plat: Platform,
    public stor: Storage,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public router: Router,
    public atrCtrl: AlertController
  ) {}
  mypage() {
    this.router.navigate(['mypage']);
  }
  ngOnInit() {
    firebase.database().ref().child('hospital/').once('value').then((snapshot) => {
      this.db.list('hospital/', ref => ref.orderByChild('price').startAt(0)).valueChanges().subscribe(
        data => {
          this.posts = data;
       });
    });
  }
  movemin() {
    console.log(this.val);
    console.log(this.min);
    this.navCtrl.navigateForward('/movemin/' + this.val + '/' + this.min);
  }
  movemax() {
    this.navCtrl.navigateForward('/movemax/' + this.val + '/' + this.max);
  }
  getItems(ev) {
    this.avg = 0;
    this.max = 0;
    this.min = 0;
    this.val = ev.target.value;
    console.log(this.val);
    if (this.val !== '') {
      firebase.database().ref().once('value').then((snapshot) => {
        this.db.list('hospital/', ref => ref.orderByChild('name').equalTo(this.val)).valueChanges().subscribe(
          data => {
            console.log(data);
            this.posts = data;
            let tmp = 0;
            let tmpmin = 10000000000;
            let tmpmax = 0;
            for (const i of this.posts) {
              tmp += (i.price);
              if (tmpmax < i.price) {
                tmpmax = i.price;
              }
              if (tmpmin > i.price) {
                tmpmin = i.price;
              }
            }
            this.max = tmpmax;
            this.min = tmpmin;
            this.avg = Number((tmp / Number(this.posts.length)).toFixed(2));
            if (tmpmin === 10000000000) {
              this.min = 0;
            }
            if (isNaN(this.avg)) {
              this.avg = 0;
            }
         });
      });
    } else {
      firebase.database().ref().child('hospital/').once('value').then((snapshot) => {
        this.db.list('hospital/', ref => ref.orderByChild('price').startAt(0)).valueChanges().subscribe(
          data => {
            this.posts = data;
         });
      });
    }
  }

  ins(){
    this.router.navigateByUrl('insurance');
  }




}
