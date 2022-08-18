import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { UserDetailDto } from 'src/app/models/userDetailDto';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = "https://localhost:44329/api/users/GetUserDetailDto"
  constructor(private httpClient : HttpClient) { }

  getUser(): Observable<ListResponseModel<UserDetailDto>>{
    return this.httpClient.get<ListResponseModel<UserDetailDto>>(this.apiUrl)
  }
}
