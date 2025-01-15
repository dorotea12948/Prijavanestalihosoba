import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  selectedId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));

    let x = document.getElementById('a');
    if(x?.innerHTML) {
      x.innerHTML += " " + String(this.selectedId);
    }
  }
}
