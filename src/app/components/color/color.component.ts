import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/Color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private colorService: ColorService) { }
  dataLoaded = false;
  colors:Color[] =[];
  currentColor : Color;
  emptyColor : Color;
  ngOnInit(): void {
    this.getColor()
  }

  getColor(){
    this.colorService.getColor().subscribe((response)=>{
      this.colors = response.data
      this.dataLoaded=true;
    })
  }


  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColor(color:Color){
    if(color == this.currentColor){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  clearCurrentColor(){
    this.currentColor = this.emptyColor;
  }
 

}
