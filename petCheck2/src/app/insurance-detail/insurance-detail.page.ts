import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataFinderService } from '../../data-finder.service';

@Component({
  selector: 'app-insurance-detail',
  templateUrl: './insurance-detail.page.html',
  styleUrls: ['./insurance-detail.page.scss'],
})
export class InsuranceDetailPage implements OnInit {
  items=[];
  item;
  title;
  companyimg;
  companyName;
  insuranceName;
  age_limit;
  renew_year; 
  max_renew_year;
  pay_month;
  reward_year;
  renew_disease_year;
  reward_portion;
  reward_range;
  nonreward;
  die;
  description;
  tag;
  constructor(
    public plat: Platform,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public atrCtrl: AlertController, public dataFinder: DataFinderService,
    public router: Router,
  ) {
    
    this.dataFinder.getJSONDataAsync("../../assets/data/insurance.json").then(data => {
      this.SetQueryOptionsData(data);
    });
    this.title = this.activatedRoute.snapshot.paramMap.get('insuranceName');
 
  }

  SetQueryOptionsData(items: any) { //items는 json데이터들
    this.items = items;//data는 json파일의 id
    this.DataFilter();
  }

  DataFilter(){
    for(let i=0;i<8;i++){
      if(this.items[i].insuranceName==this.title){
        this.item=this.items[i];
        this.companyimg=this.items[i].companyimg;
        this.age_limit=this.items[i].age_limit;
        this.renew_year=this.items[i].renew_year;
        this.companyName=this.items[i].companyName;
        this.pay_month=this.items[i].pay_month;
        this.renew_disease_year=this.items[i].renew_disease_year;
        this.reward_year=this.items[i].reward_year;
        this.reward_portion=this.items[i].reward_portion;
        this.reward_range=this.items[i].reward_range;
        this.nonreward=this.items[i].nonreward;
        this.description=this.items[i].description;
       
      }
    }
    console.log(this.item);
  }

  ngOnInit() {
  }

}
