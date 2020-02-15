import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.scss']
})
export class ViewRolesComponent implements OnInit {
  Roles=[{ID:1, roleName:"Admin"},{ID:2, roleName:"Manager"}, {ID:3, roleName:"User"}]
  constructor() { }

  ngOnInit() {
  }

}
