import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  passedId = '';
  private fname: any;
  private lname: any;

  constructor(private navParams: NavParams,private modalController: ModalController ) { }

  ngOnInit() {
    this.fname = this.navParams.get('modalFirstName');
   this.lname = this.navParams.get('modalLastName');
    if (this.fname === '' && this.lname === '') {
    this.passedId = 'Please submit any query!!';
  } else {
    this.passedId = 'Thank you ' + this.fname + ' ' + this.lname + ' ' +
     'for submitting query!!';

}
  }
  closeModal() {
    this.modalController.dismiss();
      }
   
}
