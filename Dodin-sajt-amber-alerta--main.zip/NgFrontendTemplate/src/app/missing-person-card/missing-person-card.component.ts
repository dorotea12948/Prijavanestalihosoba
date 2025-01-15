import { ApiServiceService } from './../api-service/api-service.service';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-missing-person-card',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './missing-person-card.component.html',
  styleUrl: './missing-person-card.component.css'
})
export class MissingPersonCardComponent implements AfterViewInit {
  @Input() Id : number;
  missingRecordName : string = "";
  missingRecordReport : string = "";
  missingReportImage : string = "";
  missingReportDescription : string = "";

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiServiceService) {
    this.Id = Number(this.route.snapshot.paramMap.get('id'));
  }


  ngAfterViewInit(): void {
    console.log(this.Id);

    var record = this.apiService.getRecordById(this.Id).subscribe(res => {
      console.log(res);
      this.missingRecordName = res.FirstName + " | " + res.LastName;
      this.missingRecordReport = res.Report;
      this.missingReportImage = res.Image;
      this.missingReportDescription = res.Description;
    });
    if(record == null) throw new Error('Error not implemented.');

  }

}
