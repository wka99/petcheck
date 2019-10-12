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
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  
  constructor(
    public plat: Platform,
    public stor: Storage,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public router: Router,
    public atrCtrl: AlertController
  ){} 
  hosposts=[{
      price : '300000',
      saleprice : '220000',
      condition : '2세 이내',
      sale : '중성화+종합백신',
      address: '서울특별시 마포구 마포대로16길 7',
      name: '산들산들동물병원',
      salename : '내아이 필수 패키지',
      homepage: 'https://24sdsdah.modoo.at/?link=it7m4lje'
    },
    {
      price : '350000',
      saleprice : '200000',
      condition : '2세 이내',
      sale : '중성화+광견병+코로나장염',
      address: '경기도 하남시 미사강변한강로 158번길 56',
      name: '마이펫동물병원',
      salename : '초보견주를 위한 패키지',
      homepage : 'https://cafe.naver.com/mypetamc/4'

    }]

  ngOnInit() {};
  

}
