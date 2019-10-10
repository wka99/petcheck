import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   // tslint:disable-next-line:no-inferrable-types
   username: string = '';
   // tslint:disable-next-line:no-inferrable-types
   password: string = '';
   // tslint:disable-next-line:no-inferrable-types
   cpassword: string = '';

   userid: string;
   // tslint:disable-next-line:max-line-length
   userpic = 'https://firebasestorage.googleapis.com/v0/b/petcheck-6a816.appspot.com/o/appimg%2FKakaoTalk_20190927_163422437.png?alt=media&token=b25f7fa0-95ee-49c0-9264-34f478a5c81c';

   constructor(
     public navCtrl: NavController,
     public afAuth: AngularFireAuth,
     private alertCtrl: AlertController,
     public db: AngularFireDatabase,
     public stor: Storage
     ) { }
   ngOnInit() {
   }
   async register() {
     const { username, password, cpassword, userid} = this;
     if (password !== cpassword) {
       return this.alertCtrl.create({
         header: '',
         message: '비밀번호가 다릅니다',
         buttons: [{
           text: '확인',
           role: 'cancel'
         }]
       }).then(alertEl => {
         alertEl.present();
       });
     }
     if (username === '' || password === '' || userid === '') {
       this.alertCtrl.create({
         header: '',
         message: '빈칸이 없는지 확인해주세요',
         buttons: [{
           text: '확인',
           role: 'cancel'
         }]
       }).then(alertEl => {
         alertEl.present();
       });
       return;
     }
     // tslint:disable-next-line:prefer-const
     let strArray = this.username.split('.');
     this.db.object(`userInfo/${strArray[0]}/userid`).set(this.userid);
     // tslint:disable-next-line:max-line-length
     this.db.object(`userInfo/${strArray[0]}/userpic`).set(this.userpic);
     try {
       const res =  this.afAuth.auth.createUserWithEmailAndPassword(username, password);
       this.alertCtrl.create({
         header: '알림',
         message: '회원 가입 완료 되었습니다.',
         buttons: [{
           text: '확인',
           role: 'cancel'
         }]
       }).then(alertEl => {
         alertEl.present();
       });
       this.navCtrl.navigateBack('mypage');
   } catch (error) {
     }
   }
}
