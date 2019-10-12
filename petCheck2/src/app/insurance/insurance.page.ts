import { Component, OnInit } from '@angular/core';
import { DataFinderService } from '../../data-finder.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {

  insData = [];

  constructor(
    public dataFinder: DataFinderService
  ) {
    this.dataFinder.getJSONDataAsync("../../assets/data/insurance.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }
  SetQueryOptionsData(items: any) { //items는 json데이터들
    this.insData = items;
  }
  
  ngOnInit() {
  }

}
