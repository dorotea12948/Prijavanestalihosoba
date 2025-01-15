import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class HomeComponent {
  title = 'teyvatmap';

  one: HTMLInputElement | undefined;
  two: HTMLInputElement | undefined;
  three: HTMLInputElement | undefined;
  constructor(private _http: HttpClient) { }

  test() {
    let data : FormData = new FormData();
    this.one = document.getElementById('iName') as HTMLInputElement;
    this.two = document.getElementById('iDesc') as HTMLInputElement;
    this.three = document.getElementById('iImage') as HTMLInputElement;
    let files : FileList = this.three.files as FileList;
    let file : File = files[0];
    data.append("name", this.one?.value);
    data.append("file", file, file.name);
    data.append("description", this.two?.value);

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://147.185.221.19:60875');

    const requestOptions = {
      headers: new HttpHeaders(headers),
    };

    let object = { "data": {"name" : data.get("name"), "file" : file, "description" : data.get("description")} }
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    }
    this._http.post("http://147.185.221.19:60875/api/additem", data).subscribe((a) => {
      console.log(a);
    })
  }

  private handleError(error: any) {
    console.error(error);
    return new Error("Server error (" + error.status + "): " + error.text())
  }
}

