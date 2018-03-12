import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  public base64Image: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public camera: Camera, public iab: InAppBrowser) {
    
  }
   options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  sayHello () {
    let alert = this.alertCtrl.create({
      title:"Say Hello",
      message:"Hello World",
      buttons:[{
        text:"Ok"
      }]
    });
    alert.present();
  }

  clickPicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  openUrl(){
    const browser = this.iab.create('https://google.com/','_self');

  }

}
