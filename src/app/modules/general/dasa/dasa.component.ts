import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasa',
  templateUrl: './dasa.component.html',
  styleUrls: ['./dasa.component.css']
})
export class DASACOMPONENT implements OnInit {

  language = ''

  constructor(private router: Router){
  }

  submit() {
    if(this.language === "fr") {
      this.router.navigate(['/acceuil'],{state:{lang:this.language}})
    } else if(this.language === "en") {
      this.router.navigate(['/home'], {state: {lang: this.language}})
    } else {
      alert('Choisissez une langue')
    }
   }

  ngOnInit(): void {
      
  }

}
