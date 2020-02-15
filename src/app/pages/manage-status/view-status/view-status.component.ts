import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.scss']
})
export class ViewStatusComponent implements OnInit {

  status=[{ID:1, statusName:"Active"},{ID:2, statusName:"Inactive"}]
  constructor() { }

  ngOnInit() {
  }

}
