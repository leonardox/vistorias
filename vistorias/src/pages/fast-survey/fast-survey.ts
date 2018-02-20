import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FastSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fast-survey',
  templateUrl: 'fast-survey.html',
})
export class FastSurveyPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) { }

  public location_list = ["sala", "corredor", "garagem"];
  public verification_list = [
    {
      item: "Borboletas para fixação da iluminação acessível",
      okay: "ios-thumbs-up-outline",
      notokay: "ios-thumbs-down-outline"
    },
    {
      item: "Borracha de vedação das janelas em bom estado",
      okay: "ios-thumbs-up-outline",
      notokay: "ios-thumbs-down-outline"
    },
    {
      item: "Espelhos das tomadas corretamente colocados",
      okay: "ios-thumbs-up-outline",
      notokay: "ios-thumbs-down-outline"
    },
    {
      item: "Fechadura sem arranhões",
      okay: "ios-thumbs-up-outline",
      notokay: "ios-thumbs-down-outline"
    },
    {
      item: "Fechaduras funcionando corretamente",
      okay: "ios-thumbs-up-outline",
      notokay: "ios-thumbs-down-outline"
    }];

  ionViewDidLoad() {
    console.log('ionViewDidLoad FastSurveyPage');
  }

  public click() {
    console.log("adicionar");
  }

  public clickOkay(item) {

    for (let i =0; i < this.verification_list.length; i++) {
      if (this.verification_list[i].item == item) {
        if (this.verification_list[i].okay == "ios-thumbs-up-outline") {
          this.verification_list[i].okay = "ios-thumbs-up";
          this.verification_list[i].notokay = "ios-thumbs-down-outline";
        } else {
          this.verification_list[i].okay = "ios-thumbs-up-outline";
        }
        break;
      }
    }
  }

  public clickNotOkay(item) {

    for (let i =0; i < this.verification_list.length; i++) {
      if (this.verification_list[i].item == item) {
        if (this.verification_list[i].notokay == "ios-thumbs-down-outline") {
          this.verification_list[i].notokay = "ios-thumbs-down";
          this.verification_list[i].okay = "ios-thumbs-up-outline";
        } else {
          this.verification_list[i].notokay = "ios-thumbs-down-outline";
        }
        break;
      }
    }
  }
}
