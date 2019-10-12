import { Component, OnInit } from '@angular/core';
import { DataFinderService } from '../../data-finder.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {

  insData = [];

  constructor(
    public dataFinder: DataFinderService,
    public router:Router
  ) {
    this.dataFinder.getJSONDataAsync("../../assets/data/insurance.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }
  SetQueryOptionsData(items: any) { //items는 json데이터들
    this.insData = items;
  }
  getPost(item){
    var array=item;
    this.router.navigate(['insurance-detail',item.insuranceName])
  }
  ngOnInit() {
  }

}
