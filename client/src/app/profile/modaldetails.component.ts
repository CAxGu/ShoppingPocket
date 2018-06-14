import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../shared';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-modaldetails',
  templateUrl: './modaldetails.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ModaldetailsComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) { }

  dataModal:Array<string> = [];
  total:number;

  ngOnInit() {
    // let that = this;

    // $('#moreinfoModal').on('shown.bs.modal', function (e) {
    //   that.getContentModalInfo();
    //   /* that.total = that.getTotalPurchase(); */
    // })
  }


/*   getContentModalInfo(){
    this.dataModal = this.profileService.dataModal;
  } */

  
/*   getTotalPurchase(){
    let totalPurchase = 0;

    console.log(this.dataModal);
    this.dataModal.forEach(function(item){
      totalPurchase+=(item['uds_prod']*item['prize'])*1.21;
    })
    return Math.round(totalPurchase*100)/100;
  } */

}
