import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
})
export class AgreePage implements OnInit {
  touch:Event;
  startTouch:boolean;
  constructor() { }
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
