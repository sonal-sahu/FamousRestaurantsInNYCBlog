import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstNameValue = '';
  lastNameValue = '';

  constructor(private modalController:ModalController, private actionSheetController:ActionSheetController){

  }
  async openModal() {
    const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
        modalFirstName :this.firstNameValue ,
        modalLastName: this.lastNameValue
        }
    });
  
    modal.present();
    }

    async swipeEvent() {
      console.log('Hii');
  
      const actionSheet = await this.actionSheetController.create( {
          header: 'Menu',
          buttons: [{
              text: 'Share',
              icon: 'share',
              handler: () => {
                  console.log('Share clicked');
                  }
              } ,
               {
                  text: 'Favorite',
                  icon:  'heart' ,
                   role: 'selected',
                  handler: () => {
                      console.log('Favorite clicked');
                  }
              },
              {
              text: 'Cancel',
              icon: 'close' ,
              role: 'cancel',
              handler: () => {
                  console.log('Cancel clicked');
              }
          }
          ]
  
      });
          actionSheet.present();
      }
  
}
