import { AfterViewInit, Component } from '@angular/core';
import { ApiServiceService } from '../api-service/api-service.service';
import { NgFor } from '@angular/common';
import { MissingPersonCardComponent } from "../missing-person-card/missing-person-card.component";

@Component({
  selector: 'app-missing-persons',
  standalone: true,
  imports: [NgFor, MissingPersonCardComponent],
  templateUrl: './missing-persons.component.html',
  styleUrl: './missing-persons.component.css'
})
export class MissingPersonsComponent implements AfterViewInit {
  records : any[] = [{}];

  constructor(private apiService : ApiServiceService) {
    this.apiService.getRecords().subscribe(results => {
      this.records = results
    })
  }

  ngAfterViewInit(): void {

  }

}
