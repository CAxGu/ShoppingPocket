import { Component, OnInit } from '@angular/core';
/* import { CollectionsService } from '../shared'; */

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(
    /* private collectionsService: CollectionsService */
  ) { }

  collections: Array<string> = [];

  ngOnInit() {

 /*      this.collectionsService.getAll()
      .subscribe(collections => {
      this.collections = collections;
    }) */;
  }

}
