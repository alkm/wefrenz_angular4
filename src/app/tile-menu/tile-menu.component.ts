import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

  constructor() { }

  private activeHighLight = false;
  private activeHighLightStories = false;

  ngOnInit() {
  }
  
}
