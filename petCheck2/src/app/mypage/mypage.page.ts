import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import {Camera} from '@ionic-native/camera/ngx';



interface User {
  email?: string;
  password?: string;
}
@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {

  picname: string = "";
  imageURI: string = "";
  tmpimgurl:any;
  public useremail: string = null;
  public keyforpost;
  public userid: string = null;
  public userpic: string = null;
  public petname: string = null;
  public petsex: string = null;
  public petcate: string = null;
  public petsize: string = null;
  public petage: string = null;
  temp_em: string;
user: User = {
  email: '',
  password: '',
};
  // tslint:disable-next-line:no-inferrable-types
  username: string = '';
  // tslint:disable-next-line:no-inferrable-types
  password: string = '';
  constructor(
    public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    public router: Router,
    public db: AngularFireDatabase,
    public stor: Storage,
    public st: AngularFireStorage,
    private camera: Camera
    ) { }

  ngOnInit() {
    this.stor.get('id').then((val) => {
      this.userid = val;
    });
    this.stor.get('email').then((val) => {
      this.useremail = val;
    });
    this.stor.get('pic').then((val) => {
      this.userpic = val;
    });
    this.stor.get('petname').then((val) => {
      this.petname = val;
    });
    this.stor.get('petsex').then((val) => {
      this.petsex = val;
    });
    this.stor.get('petcate').then((val) => {
      this.petcate = val;
    });
    this.stor.get('petsize').then((val) => {
      this.petsize = val;
    });
    this.stor.get('petage').then((val) => {
      this.petage = val;
    });
  }
  async login() {
    // tslint:disable-next-line:prefer-const
    let useridtmp;
    let userpictmp;
    let petnametmp;
    let petsextmp;
    let petagetmp;
    let petsizetmp;
    let petcatetmp;
    const { username, password } = this;
    try {
        const rootRef = firebase.database().ref();
        const user = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        this.user.email = username;
        this.user.password = password;
        const temp = username.split('.');
        this.useremail = temp[0];
        this.stor.set('email', temp[0]);
        // tslint:disable-next-line:only-arrow-functions
        // 사용자 아이디
        rootRef.child('userInfo').child(`${temp[0]}/userid`).once('value', function(data) {
          useridtmp = data.val();
        }).then( result => {
          this.userid = result.val();
          this.stor.set('id', result.val());
        });
        // tslint:disable-next-line:only-arrow-functions
        // 사용자 프로필 사진
        rootRef.child('userInfo').child(`${temp[0]}/userpic`).once('value', function(data) {
          userpictmp = data.val();
        }).then( result => {
          this.userpic = result.val();
          document.getElementById('upic').setAttribute('src', this.userpic);
          this.stor.set('pic', result.val());
        });
        // 펫 이름
        rootRef.child('userInfo').child(`${temp[0]}/petname`).once('value', function(data) {
          petnametmp = data.val();
        }).then( result => {
          this.petname = result.val();
          this.stor.set('petname', result.val());
        });
        // 펫 나이
        rootRef.child('userInfo').child(`${temp[0]}/petage`).once('value', function(data) {
          petagetmp = data.val();
        }).then( result => {
          this.petage = result.val();
          this.stor.set('petage', result.val());
        });
        // 펫 성별
        rootRef.child('userInfo').child(`${temp[0]}/petsex`).once('value', function(data) {
          petsextmp = data.val();
        }).then( result => {
          this.petsex = result.val();
          this.stor.set('petsex', result.val());
        });
        // 펫 종류
        rootRef.child('userInfo').child(`${temp[0]}/petcate`).once('value', function(data) {
          petcatetmp = data.val();
        }).then( result => {
          this.petcate = result.val();
          this.stor.set('petcate', result.val());
        });
        // 펫 크기
        rootRef.child('userInfo').child(`${temp[0]}/petsize`).once('value', function(data) {
          petsizetmp = data.val();
        }).then( result => {
          this.petsize = result.val();
          this.stor.set('petsize', result.val());
        });
        this.alertCtrl.create({
          header: '',
          message: '로그인되었습니다',
          buttons: [{
            text: '확인',
            role: 'cancel'
          }]
        }).then(alertEl => {
          alertEl.present();
        });
      } catch (err) {
      this.alertCtrl.create({
        header: '',
        message: '아이디 또는 비밀번호가 틀렸습니다',
        buttons: [{
          text: '확인',
          role: 'cancel'
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
  }
  async atrLout() {
    const alert = await this.alertCtrl.create({
      header: '알림',
      message: '로그아웃되었습니다',
      buttons: [
        {
          text: '확인',
          role: 'cancel',
          handler: (blah) => {
            console.log('logout');
           // this.router.navigateByUrl('/tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }
  Agree() {
    this.router.navigate(['agree']);
  }
  logout() {
    this.userid = null;
    this.useremail = null;
    this.userpic = null;
    this.username = null;
    this.password = null;
    this.petname = null;
    this.petcate = null;
    this.petsize = null;
    this.petsex = null;
    this.petage = null;
    this.stor.set('id', null);
    this.stor.set('email', null);
    this.stor.set('pic', null);
    this.stor.set('petname', null);
    this.stor.set('petcate', null);
    this.stor.set('petsex', null);
    this.stor.set('petage', null);
    this.stor.set('petsize', null);
    // tslint:disable-next-line:only-arrow-functions
    firebase.auth().signOut().then(function() { // 채팅 못하도록 함
      console.log('Sign-out successful');
    });
    this.atrLout();
  }
  pickPicture() {
    // tslint:disable-next-line:prefer-const
    let options = {
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then((imageURI) => {
      // tslint:disable-next-line:prefer-const
      let newName = `${new Date().getTime()}.png`;
      console.log(imageURI);
      // 이미지 미리보기
      document.getElementById('upic').setAttribute('src', 'data:image/jpeg;base64,' + imageURI);
      this.imageURI = imageURI;
      this.picname = newName;
      this.st.ref(`userpic/${newName}`).putString(imageURI, 'base64', {contentType: 'image/png'}).then( value => {
        this.showImage();
      });
    });
  }
  agree(){

  }
  showImage() {
    // tslint:disable-next-line: prefer-const
          let storageRef = firebase.storage().ref();
    // tslint:disable-next-line: prefer-const
          let imageRef = storageRef.child(`userpic/${this.picname}`);
          // console.log(imageRef.getDownloadURL());
          imageRef.getDownloadURL()
          .then((imageURI) => {
            this.tmpimgurl = imageURI;
            this.db.object(`userInfo/${this.useremail}/userpic`).set(this.tmpimgurl);
            this.stor.set('pic', this.tmpimgurl);
          });
        }

  changeNameForResign(){
    // userInfo에서 삭제하기.
    firebase.database().ref().once('value').then((snapshot) => {
      this.db.object(`userInfo/${this.temp_em}`).set(null);
      console.log('이메일', this.temp_em);
    });
    this.db.list('/informTxt', ref => ref.orderByChild('sender').equalTo(this.userid)).snapshotChanges()
    .subscribe(actions => {
        actions.forEach(action => {
          // here you get the key
          console.log(action.key);
          this.db.list('/informTxt').update(action.key, { sender: '(알수없음)' });
        });
    });
    this.db.list('/regisTxt', ref => ref.orderByChild('userid').equalTo(this.userid)).snapshotChanges()
    .subscribe(actions => {
        actions.forEach(action => {
          // here you get the key
          console.log(action.key);
          this.db.list('/regisTxt').update(action.key, { userid: '(알수없음)' });
        });
    });

  }
  async alertDelete(){
    const alert = await this.alertCtrl.create({
      header:'알림',
      message: '탈퇴 처리 되었습니다.',
      buttons:[
        {
          text:'확인',
          role:'cancel',
          handler:(blah)=>{
            console.log('탈퇴');
            //this.router.navigateByUrl('tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }
  async gogone() { 
    this.temp_em = this.useremail;
    const al = await this.alertCtrl.create({
      header:'알림',
      message: '작성하신 글은 삭제 되지 않습니다.<br/> 정말로 탈퇴 하시겠습니까?',
      buttons:[
        {
          text:'아니오',
          role:'cancel',
          cssClass:'secondary',
          handler:(blah)=>{
          }
        },
        {
          text:'네',
          handler:()=>{
            this.afAuth.auth.currentUser.delete().then(() => {
              this.afAuth.auth.signOut();
            }).catch(function(error) {
              this.atrCtrl.create({
                header: '알림',
                message: '다시 로그인 후 시도해 주세요!',
                buttons: [{
                  text: '확인',
                  role: 'cancel'
                }]
              }).then(alertEl => {
                alertEl.present();
              });
            });
             // userInfo에서 삭제하기.
            this.changeNameForResign();
            this.userid = null;
            this.useremail = null;
            this.userpic = null;
            this.username = null;
            this.password = null;
            this.stor.set('id', null);
            this.stor.set('email', null);
            this.stor.set('pic', null);
            // tslint:disable-next-line:only-arrow-functions
            firebase.auth().signOut().then(function() { // 채팅 못하도록 함
              console.log('Sign-out successful');
            });
           this.alertDelete();
            }
          }
      ]
    });
    await al.present();

  }

  goMedicalChart(){
    this.router.navigateByUrl('medical-chart');
  }

}
