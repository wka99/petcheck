import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
})

export class AgreePage implements OnInit {
  masterCheck:boolean;
  constructor(public alertCtrl: AlertController, public router:Router) {}
  items1 = [{
    isRight:false,
    isChecked: false,
    name: '롯데손해보험'
  },
  {
    isRight:false,
    isChecked: false,
  name: '메리츠화재'
  },
  {
    isRight:false,
    isChecked: false,
  name: '삼성화재'
  },
  {
    isRight:false,
    isChecked: false,
  name: '한화손해보험'
  },
  {
    isRight:false,
    isChecked: false,
  name: '현대해상'
  }
  ,
  {
    isRight:false,
    isChecked: false,
  name: 'DB손해보험'
  }]
  items2 = [{
    isRight:false,
    isChecked: true,
    name: '나의 펫 정보'
  }
  ];
  items3 = [  {
    isRight:false,
    isChecked: false,
    name: '펫의 진료기록',
  },
    {
    isRight:false,
    isChecked: false,
    name: '연락처',
  },
  {
    isRight:false,
    isChecked: false,
    name: '이메일',
  }
  ];
  selOptions: Array < string > ;
  ngOnInit() {
  }
  goback() {
    this.router.navigate(['mypage']);
  }
  checkMaster(){
    setTimeout(()=>{
      this.items1.forEach(obj=>{
        obj.isChecked=this.masterCheck;
      })
      this.items2.forEach(obj=>{
        obj.isChecked=this.masterCheck;
      })
      this.items3.forEach(obj=>{
        obj.isChecked=this.masterCheck;
      })
    });
  }
  clickAlert(){
    this.alertCtrl.create({
      header: '',
      message: '저장되었습니다.',
      buttons: [{
        text: '확인',
        handler:()=>{
          this.goback();
        } 
      }]
    }).then(alertEI => {
      alertEI.present();
    });
  }
  mouseover(item:any){
    if(item.isChecked) item.isChecked=false;
    else item.isChecked=true;
  }

  touchstart(item:any){
    if(item.isRight){
      return;
    }
    item.isRight=true;
    item.isChecked=true;
  }
  touchmove(item:any){
    if(item.isRight){return;}
    if(item.isChecked){
      item.isChecked=false;
    }
    else {
      item.isChecked=true;
    }
  }
}
