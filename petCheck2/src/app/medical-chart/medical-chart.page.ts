import { Component, OnInit } from '@angular/core';
import {DataFinderService} from '../../data-finder.service';
@Component({
  selector: 'app-medical-chart',
  templateUrl: './medical-chart.page.html',
  styleUrls: ['./medical-chart.page.scss'],
})
export class MedicalChartPage implements OnInit {
array=[];
price;
  constructor(
    public dataFinder:DataFinderService
  ) { 
    //json데이터 가져오기
    this.dataFinder.getJSONDataAsync("../../assets/data/csvjson.json").then(data=>{
      this.SetQueryOptionsData(data);
    });
   }
   SetQueryOptionsData(items:any){ //items는 json데이터들
    this.array= items;//data는 json파일의 id
    this.price=this.array[0].가격2;
  }

  ngOnInit() {
  }

}
