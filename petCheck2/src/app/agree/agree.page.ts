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
    name: '개인정보 처리',
    text: '홈페이지 회원 가입 및 관리, 서비스 제공, 민원처리'
  },
  {
    isRight:false,
    isChecked: false,
  name: '회원정보 수집 및 보유',
  text: '아이디, 성명, 주소, 휴대폰번호, 이메일주소'
  }]
  items2 = [{
    isRight:false,
    isChecked: false,
    name: '회원 정보'
  },
  {
    isRight:false,
    isChecked: false,
    name: '나의 펫 정보'
  },
  {
    isRight:false,
    isChecked: false,
    name: '펫의 진료기록'
  },
  ];
  items3 = [{
    isRight:false,
    isChecked: false,
    name: '이메일 마케팅',
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
      message: '약관이 저장되었습니다.',
      buttons: [{
        text: '네',
        handler:()=>{
          this.goback();
        } 
      }]
    }).then(alertEI => {
      alertEI.present();
    });
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
