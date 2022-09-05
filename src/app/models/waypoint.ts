export class Waypoint {
  name!: string;
  position!: google.maps.LatLngLiteral;
  type!: string;
  markerOptions!: google.maps.MarkerOptions;

  constructor(position: google.maps.LatLngLiteral, type: string, name: string) {
    this.position = position;
    this.type = type;
    this.name = name;
    this.markerOptions = {
      draggable: false,
      animation: google.maps.Animation.DROP,
    };
  }

  setStart() {
    this.type = 'start';
  }

  setWaypoint() {
    this.type = 'waypoint';
  }

  setEnd() {
    this.type = 'end';
  }
}
