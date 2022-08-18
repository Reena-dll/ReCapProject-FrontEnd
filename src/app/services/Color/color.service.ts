import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44329/api/colors/getall"
  
  constructor(private httpClient : HttpClient) { }

  getColor(): Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}
