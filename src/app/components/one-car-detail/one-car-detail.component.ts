import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/Car/car.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {
  
  oneCarDetailDto:CarDetailDto[] = [];
  dataLoaded = false;
  constructor(private carService : CarService, private activatedRoute : ActivatedRoute) { }

 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      this.oneCarDetailDto = response.data
      debugger
      console.log(this.oneCarDetailDto[0])
      this.dataLoaded = true;
    })
  }

}