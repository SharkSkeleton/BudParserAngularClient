import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-site',
  templateUrl: './search-site.component.html',
  styleUrls: ['./search-site.component.css']
})
export class SearchSiteComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  sendMessage(): void {
    this.messageEvent.emit('');
  }

}
