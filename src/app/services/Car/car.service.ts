import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../../models/carDetailDto';
import { ListResponseModel } from '../../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44329/api/'

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl +"cars/GetCarDetailDto"
   return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl +"cars/GetCarsByBrandIdDto?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
   }

   getCarsByColor(colorId:number) : Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl +"cars/GetCarsByColorIdDto?colorid="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
   }

}
