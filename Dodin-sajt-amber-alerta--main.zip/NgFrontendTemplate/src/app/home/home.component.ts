import { MapComponent } from './../map/map.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, provideRouter } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'teyvatmap';
  constructor (private router : Router, private routerLink: RouterOutlet) { }
  toList() {
    this.router.navigate(['/', 'missing'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  newPerson() {

  }
}

