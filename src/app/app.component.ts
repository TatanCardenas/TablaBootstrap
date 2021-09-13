import { Component, OnInit } from '@angular/core';

export interface Students{
  position: number;
  marca: string;
  precio: number;
  cantidad: number;
}

const ELEMENT_DATA: Students[] = [
  {position: 1, marca: 'Pepsi', precio: 2600, cantidad: 15},
  {position: 2, marca: 'Coca-Cola', precio: 3000, cantidad: 30},
  {position: 3, marca: 'Hit', precio: 1800, cantidad: 18},
  {position: 4, marca: 'Brisa', precio: 1000, cantidad: 20},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit{
  title = 'TablaBootstrap';
  nombre = 'hit';
  displayedColumns: string[] = ['position', 'marca', 'precio', 'cantidad'];
  dataSource = ELEMENT_DATA;
  data =[
    {position: 1, marca: 'Pepsi', precio: 2600, cantidad: 15},
    {position: 2, marca: 'Coca-Cola', precio: 3000, cantidad: 30},
    {position: 3, marca: 'Hit', precio: 1800, cantidad: 18},
    {position: 4, marca: 'Brisa', precio: 1000, cantidad: 20},
  ];
  constructor() {}

  ngOnInit(): void{
  }
}
