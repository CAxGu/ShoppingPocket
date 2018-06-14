import { Component, OnInit } from '@angular/core';
/* import { ValuatedItemsService} from '../shared'; */

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-valuateditems',
  templateUrl: './valuateditems.component.html',
  styleUrls: ['./valuateditems.component.scss']
})
export class ValuateditemsComponent implements OnInit {

  constructor(
  /*   private valuatedItems: ValuateditemsService */
  ) { }

  valuated: Array<string> = [];

  ngOnInit() {

    /* Suscription to get all valuated items from db (not implemented yet) */
    /* this.valuatedItems.getAll()
    .subscribe(valuated => {
      this.valuated = valuated;
    }); */

    /* CARROUSEL MULTIPLE ITEMS CONTROL BUTTONS */
    (function($) {
        "use strict";
    
        // manual carousel controls
        $('.container-carrouselmulti .next').click(function(){ $('#mostVotedCarousel').carousel('next');return false; });
        $('.container-carrouselmulti .prev').click(function(){ $('#mostVotedCarousel').carousel('prev');return false; });
        
    })(jQuery);


    /* STARTS JAVASCRIOT RELATED */
    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
      return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
          return $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
          return $(this).removeClass('fa-star').addClass('fa-star-o');
        }
      });
    };
    
    /* Function to control the valoration (not implemented yet) */
/*     $star_rating.on('click', function() {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    }); */
    
    SetRatingStar();
    $(document).ready(function() {
    
    });
  }

}
