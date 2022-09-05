import { Injectable } from '@angular/core';
import { Waypoint } from '../models/waypoint';

@Injectable({
  providedIn: 'root',
})
export class WaypointService {
  public waypoints: Waypoint[] = new Array();

  constructor() {}

  createWaypoint(
    lat: number,
    lng: number,
    type: string = 'waypoint',
    name: string = `Waypoint ${this.waypoints.length + 1}`
  ) {
    // Check wether a waypoint with the same position already exists
    if (
      !this.waypoints.find(
        (waypoint) =>
          waypoint.position.lat === lat && waypoint.position.lng === lng
      )
    ) {
      let waypoint = new Waypoint({ lat, lng }, type, name);
      this.waypoints.push(waypoint);
    }
  }

  deleteWaypoint(waypoint: Waypoint) {
    this.waypoints.splice(this.waypoints.indexOf(waypoint), 1);
  }

  clearWaypoints() {
    this.waypoints = new Array();
  }

  isStartSet(): boolean {
    return (
      this.waypoints.find((waypoint) => waypoint.type === 'start') !== undefined
    );
  }

  isEndSet(): boolean {
    return (
      this.waypoints.find((waypoint) => waypoint.type === 'end') !== undefined
    );
  }

  getStart(): Waypoint | undefined {
    return this.waypoints.find((waypoint) => waypoint.type === 'start');
  }

  getEnd(): Waypoint | undefined {
    return this.waypoints.find((waypoint) => waypoint.type === 'end');
  }

  getDirectionsWaypoints(): google.maps.DirectionsWaypoint[] {
    return this.waypoints
      .filter((waypoint) => waypoint.type === 'waypoint')
      .map((waypoint) => {
        return {
          location: new google.maps.LatLng(
            waypoint.position.lat,
            waypoint.position.lng
          ),
          stopover: true,
        };
      });
  }
}
