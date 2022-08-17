import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  product: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product2: any = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product4: any = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
  };
  product5: any = {
    productId: 5,
    productName: 'Kamera',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
