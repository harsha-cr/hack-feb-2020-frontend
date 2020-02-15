import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-designation',
  templateUrl: './view-designation.component.html',
  styleUrls: ['./view-designation.component.scss']
})
export class ViewDesignationComponent implements OnInit {
  Designation=[{ID:4, designationName:"Active"},{ID:5, designationName:"Inactive"}]
  constructor() { }

  ngOnInit() {
  }

}
