import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl : string = 'http://society-sharon.gl.at.ply.gg:16244/api';

  constructor(private http: HttpClient) { }


  public getRecordById(id : number): Observable<any> {
    return this.http.post(`${this.apiUrl}/getrecord`, {'Id':id});
  }

  public getRecords(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getrecords`);
  }

}
