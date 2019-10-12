import { Component, OnInit } from '@angular/core';
import { DataFinderService } from '../../data-finder.service';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-medical-chart',
  templateUrl: './medical-chart.page.html',
  styleUrls: ['./medical-chart.page.scss'],
})
export class MedicalChartPage implements OnInit {
  array = [];
  downData = [];
  price;
  newValue=0;
  constructor(
    public dataFinder: DataFinderService,
    public alertCtrl: AlertController,
  ) {
    //json데이터 가져오기
    this.dataFinder.getJSONDataAsync("../../assets/data/csvjson.json").then(data => {
      this.SetQueryOptionsData(data);
    });
    this.dataFinder.getJSONDataAsync("../../assets/data/download.json").then(data => {
      this.SetQueryOptionsData2(data);
    });
  }
  SetQueryOptionsData(items: any) { //items는 json데이터들
    this.array = items;//data는 json파일의 id
    this.price = this.array[0].가격2;
  }
  SetQueryOptionsData2(items) { //items는 json데이터들
    var keys = Object.keys(items[0]);

    // Build header
    var result = keys.join("\t") + "\n";

    // Add the rows
    items.forEach(function(obj){
        keys.forEach(function(k, ix){
            if (ix) result += "\t";
            result += obj[k];
        });
        result += "\n";
    });

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += result;
    var encodedUri = encodeURI(csvContent);
    document.getElementById('d').setAttribute('href', encodedUri);
    document.getElementById('d').setAttribute('download', 'my_data.csv');
  }
  download() {
    this.alertCtrl.create({
      header: '',
      message: '최근 진단서를 업로드 하시겠습니까?',
      buttons: [{
        text: '아니요',
        role: 'cancel'
      },{
        text: '네',
        handler:()=>{
          this.up();
        }
      }]
    }).then(alertEI => {
      alertEI.present();
    });
  }
  ngOnInit() {
  }
  up() {
    this.newValue = 1;
    console.log(this.newValue);
  }
}
