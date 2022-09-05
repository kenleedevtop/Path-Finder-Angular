import { Component, OnInit } from '@angular/core';
import { DeleteWaypointsDialog } from '../delete-waypoints-dialog/delete-waypoints-dialog.component';
import { EditWaypointsDialogComponent } from 'src/app/components/edit-waypoints-dialog/edit-waypoints-dialog.component';
import { ImportDialogComponent } from '../import-dialog/import-dialog.component';
import { map, Observable } from 'rxjs';
import { MapDirectionsService } from '@angular/google-maps';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Waypoint } from 'src/app/models/waypoint';
import { WaypointService } from 'src/app/services/waypoint.service';

@Component({
  selector: 'app-route-finder',
  templateUrl: './route-finder.component.html',
  styleUrls: ['./route-finder.component.scss'],
})
export class RouteFinderComponent implements OnInit {
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    streetViewControl: false,
  };

  markersHidden = false;
  directionsResults!: Observable<google.maps.DirectionsResult | undefined>;

  constructor(
    public waypointService: WaypointService,
    public mapDirectionsService: MapDirectionsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // for loop increase tries every time it fails
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      },
      (error) => {
        this.snackBar.open(
          'Could not get your location. Please make sure you have location services enabled.',
          'OK'
        );
      }
    );
  }

  addWaypoint(event: google.maps.MapMouseEvent) {
    if (event.latLng?.lat && event.latLng?.lng) {
      this.directionsResults = new Observable<undefined>();
      this.markersHidden = false;
      this.waypointService.createWaypoint(
        event.latLng?.lat(),
        event.latLng?.lng()
      );
    }
  }

  editWaypoint(waypoint: Waypoint) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = waypoint;

    this.dialog.open(EditWaypointsDialogComponent, dialogConfig);
  }

  findShortestRoute() {
    const start = this.waypointService.getStart();
    const end = this.waypointService.getEnd();

    if (start && end) {
      const request: google.maps.DirectionsRequest = {
        origin: start.position,
        waypoints: this.waypointService.getDirectionsWaypoints(),
        optimizeWaypoints: true,
        destination: end.position,
        travelMode: google.maps.TravelMode.BICYCLING,
      };
      this.directionsResults = this.mapDirectionsService
        .route(request)
        .pipe(map((response) => response.result));
      this.markersHidden = true;
    }
  }

  moveToWaypoint(waypoint: Waypoint) {
    this.markersHidden = false;
    this.center = waypoint.position;
  }

  clearWaypoints() {
    this.dialog.open(DeleteWaypointsDialog);
    this.directionsResults = new Observable<undefined>();
    this.markersHidden = false;
  }

  importWaypoints() {
    const dialogRef = this.dialog.open(ImportDialogComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        let waypoints = data.split('\n');
        this.directionsResults = new Observable<undefined>();
        this.markersHidden = false;
        for (let i = 0; i < waypoints.length; i++) {
          let waypoint = waypoints[i].split(',');
          if (
            waypoint.length == 2 &&
            !isNaN(parseFloat(waypoint[0])) &&
            !isNaN(parseFloat(waypoint[1]))
          ) {
            this.waypointService.createWaypoint(
              parseFloat(waypoint[0]),
              parseFloat(waypoint[1])
            );
          }
        }
      }
    });
  }

  copyWaypoints() {
    let waypoints = '';
    for (let i = 0; i < this.waypointService.waypoints.length; i++) {
      waypoints +=
        this.waypointService.waypoints[i].position.lat +
        ', ' +
        this.waypointService.waypoints[i].position.lng +
        '\n';
    }
    navigator.clipboard.writeText(waypoints);
  }
}
