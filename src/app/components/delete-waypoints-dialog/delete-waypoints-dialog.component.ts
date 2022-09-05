import { Component, Inject, OnInit } from '@angular/core';
import { WaypointService } from 'src/app/services/waypoint.service';

@Component({
  selector: 'delete-waypoints-dialog',
  templateUrl: './delete-waypoints-dialog.component.html',
  styleUrls: ['./delete-waypoints-dialog.component.scss'],
})
export class DeleteWaypointsDialog implements OnInit {

  constructor(public waypointService: WaypointService) {}

  ngOnInit(): void {}
}
