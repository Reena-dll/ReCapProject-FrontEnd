import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  constructor(private carImageService : CarImageService, private activatedRoute: ActivatedRoute) { }

  carImages:CarImage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages)
    })
  }

}
