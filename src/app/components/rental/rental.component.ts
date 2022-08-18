import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/Rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private rentalService:RentalService) { }

  rentals:RentalDetailDto[] = [];
  dataLoaded = false;
  ngOnInit(): void {
    this.getRental()
  }

  getRental(){
    this.rentalService.getRental().subscribe((response)=>{
      this.rentals = response.data
      this.dataLoaded = true;
    })
  }

}
