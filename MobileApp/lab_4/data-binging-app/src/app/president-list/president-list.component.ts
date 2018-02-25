import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-president-list',
  templateUrl: './president-list.component.html',
  styleUrls: ['./president-list.component.css']
})
export class PresidentListComponent implements OnInit {

    presidents:object[] = [
        {name:"Higgins", term:"2011-"},
        {name:"McAleese", term:"1997-2011"},
        {name:"Robinson", term:"1990-1997"},
        {name:"Hillery", term:"1976-1990"},
        {name:"O Dalaigh", term:"1974-1976"}
    ]

    

  constructor() { }

  ngOnInit() {
  }



}
