import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44329/api/Rentals/GetRentalDetailDto"
  constructor(private httpClient: HttpClient) { }

  getRental():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl)
  }
}
