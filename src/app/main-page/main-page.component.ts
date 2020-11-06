import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  myBool = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeFlag($event): void {
    this.myBool = !this.myBool;
  }

}
