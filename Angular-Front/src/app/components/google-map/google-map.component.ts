import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GeoService } from '../../service/geo.service'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styles: [`
    agm-map {
      height: 1000px;
    }
  `],
  template: `
    <app-sidebar></app-sidebar>
    <div *ngIf="lat && lng">

      <agm-map [latitude]="lat" [longitude]="lng" [zoom]="13">

        <agm-marker [latitude]="lat" [longitude]="lng" >

          <agm-info-window>
            <h3><strong>Location</strong></h3>
            <p>You are here!</p>
          </agm-info-window>

        </agm-marker>
        <agm-marker *ngFor="let marker of myarray"
                    [latitude]="marker[0]"
                    [longitude]="marker[1]"
                    [iconUrl]="'../../assets/img/map_icon3.png'">

          <agm-info-window>
            <h3><strong>Bin Filled</strong></h3>

            <p>{{ marker[2]}} </p>
          </agm-info-window>

        </agm-marker>

      </agm-map>

      </div>
  `
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  size: number;
  public bin_obj:any;
  public  myarray =[];

  subscription: any;
  private geo: GeoService;

  constructor(app:AppComponent) {
    //This component get from the AppComponent
    this.bin_obj = app.bins;
  }

  ngOnInit() {
    this.getUserLocation()
    this.bin_obj.forEach(element => {
      this.size = element.length;
      for (var i =0 ; i<this.size;i++){
        this.myarray.push([element[i].location.lat,element[i].location.lon,element[i].description]);
      }
    });

  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;


      });
    }
  }


}
