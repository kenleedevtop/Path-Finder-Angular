import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Waypoint } from '../../models/waypoint';
import { WaypointService } from '../../services/waypoint.service';

@Component({
  selector: 'app-edit-waypoints-dialog',
  templateUrl: './edit-waypoints-dialog.component.html',
  styleUrls: ['./edit-waypoints-dialog.component.scss'],
})
export class EditWaypointsDialogComponent implements OnInit {
  waypoint: Waypoint;

  constructor(
    public waypointService: WaypointService,
    private dialogRef: MatDialogRef<EditWaypointsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) waypoint: Waypoint
  ) {
    this.waypoint = waypoint;
  }

  ngOnInit(): void {}
}
