import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/Car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carDetailsDto : CarDetailDto[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.carDetailsDto = response.data
      this.dataLoaded=true;
    });
    
  }

}
