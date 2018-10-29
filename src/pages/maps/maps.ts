import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  CameraPosition,
  MarkerOptions,
  GoogleMapOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google;

//@IonicPage()
//ionic cordova run android

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map_canvas') mapElement: ElementRef;
  map: any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  waypoints: any[];
  myLatLng: any;

  starLatLng: any;
  endLatLng: any;

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation
  ) {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.bounds = new google.maps.LatLngBounds();
  }

  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map_canvas');
    let panelEle: HTMLElement = document.getElementById('panel');

    // create LatLng object
    this.myLatLng = {lat: latitude, lng: longitude};
    this.starLatLng = {lat: 4.595397999999999, lng: -74.15429069999999};
    this.endLatLng = {lat: 4.6, lng: -74.18};

    // create map
    this.map = new google.maps.Map(mapEle, {
      zoom: 15,
      center: this.myLatLng
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(panelEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: this.myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
      //this.calculateRoute();
    });

    this.directionsDisplay.setMap(this.map);

     // Work with points
    /*this.waypoints = [
      {
        location: { lat: 4.6241329, lng: -74.1768411 },
        stopover: true,
      },
      {
        location: { lat: 4.6247745, lng: -74.1698888 },
        stopover: true,
      },
      {
        location: { lat: 4.6212241, lng: -74.1631081 },
        stopover: true,
      },
      {
        location: { lat: 4.6222508, lng: -74.1667989 },
        stopover: true,
      }
    ];*/
  }

  calculateRoute(){
    
    // Work with points
    /*
      this.bounds.extend(this.myLatLng);

      this.waypoints.forEach(waypoint => {
      var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
      this.bounds.extend(point);
      });

      this.map.fitBounds(this.bounds);
    */    

    this.directionsService.route({
      origin: this.starLatLng,//new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: this.endLatLng,//new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      //waypoints: this.waypoints, //para seguir puntos intermedios
      //optimizeWaypoints: true, //ruta optima
      travelMode: google.maps.TravelMode.DRIVING //DRIVING,BICYCLING,TRANSIT,WALKING
      //avoidTolls: true //Evitar peajes
    }, (response, status)=> {
      if(status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Solicitud fallida debido a: ' + status);
      }
    });  
  }

  moveCamera(position2: Geoposition)
  {
    let options: CameraPosition<Geoposition> = {
      target: position2,
      zoom: 15,
      tilt: 10
    }

    //this.map.moveCamera(options)
  }

  LoadBikeRoutes()
  {
    //Cargar el layer de las bici rutas
    var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(this.map);
  }

}