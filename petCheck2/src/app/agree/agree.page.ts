import { Component, OnInit } from '@angular/core';
import {DataFinderService} from '../../data-finder.service';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
})
export class AgreePage implements OnInit {

  selOptions: Array < string > ;
  
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
  constructor(
  ) { 
  
   }
  
  ngOnInit() {
  }
 
  Mouseover(item:any){
    if(item.isChecked) item.isChecked=false;
    else item.isChecked=true;
  }
}
