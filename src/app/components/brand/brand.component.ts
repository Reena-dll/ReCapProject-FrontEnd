import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/Brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  dataLoaded = false
  brands:Brand[] = [];
  currentBrand : Brand;
  emptyBrand:Brand;
  
  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrand()
  }

  getBrand(){
    this.brandService.getBrand().subscribe((response)=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand : Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item bg-dark text-white "
    }else{
      return "list-group-item" 
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item bg-dark text-white "
    }else{
      return "list-group-item" 
    }
  }

  clearCurrentBrand(){
    this.currentBrand = this.emptyBrand;
  }
  
}
