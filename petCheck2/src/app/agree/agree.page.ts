import { Component, OnInit } from '@angular/core';
import {DataFinderService} from '../../data-finder.service';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss'],
})
export class AgreePage implements OnInit {

  selOptions: Array < string > ;
  array=[];
  price;
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
    public dataFinder:DataFinderService
  ) { 
    //json데이터 가져오기
    this.dataFinder.getJSONDataAsync("../../assets/data/csvjson.json").then(data=>{
      this.SetQueryOptionsData(data);
    });
    

   }
  
  ngOnInit() {
  }
  SetQueryOptionsData(items:any){ //items는 json데이터들
    this.array= items;//data는 json파일의 id
    this.price=this.array[0].가격2;
}
  Mouseover(item:any){
    if(item.isChecked) item.isChecked=false;
    else item.isChecked=true;
  }
}
