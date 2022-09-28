import { Component, OnInit } from '@angular/core';
import { details } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMECOMPONENT implements OnInit {

  isShown1: boolean = false
  isShown2: boolean = false
  isShown3: boolean = false

  detailsSport = Array(details.sport)
  detailsCulture = Array(details.culture)
  detailsAcademique = Array(details.académiques)

  show1() {
    this.isShown1 = ! this.isShown1;
    this.isShown2 = false
    this.isShown3 = false
  }
  show2() {
    this.isShown2 = ! this.isShown2;
    this.isShown1 = false
    this.isShown3 = false
  }
  show3() {
    this.isShown3 = ! this.isShown3;
    this.isShown1 = false
    this.isShown2 = false
  }

  data = details

  constructor() { }

  ngOnInit(): void {
  }

}
