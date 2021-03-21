import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: string[];

  constructor() {
    this.products = ['кино', 'вино', 'домино'];
    this.products.push('dddd');
  }

  ngOnInit(): void {
  }

}
