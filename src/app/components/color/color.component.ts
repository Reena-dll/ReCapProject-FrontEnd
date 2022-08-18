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
  ngOnInit(): void {
    this.getColor()
  }

  getColor(){
    this.colorService.getColor().subscribe((response)=>{
      this.colors = response.data
      this.dataLoaded=true;
    })
  }

}
