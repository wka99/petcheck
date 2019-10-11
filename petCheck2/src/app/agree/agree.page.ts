import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
})
export class AgreePage implements OnInit {

  constructor() {  }
  items = [{
    isChecked: false,
    name: '나의 정보'
  },
  {
    isChecked: false,
    name: '나의 펫 정보'
  },
  {
    isChecked: false,
    name: '펫의 진료기록'
  },
  ];

  selOptions: Array < string > ;
  ngOnInit() {
  }
  Mouseover(item:any){
    if(item.isChecked) item.isChecked=false;
    else item.isChecked=true;
  }
}
