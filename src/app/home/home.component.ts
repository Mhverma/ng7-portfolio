import { Component, OnInit } from '@angular/core';

import { CanvasAnimation } from '../models/CanvasAnimation'
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


@ViewChild('myCanvas') myCanvas: ElementRef;
public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  	//const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
	//new CanvasAnimation(this.myCanvas);
  }

  ngAfterViewInit(): void {
  /*this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  let myImage = new Image();
  myImage.src = "/../assets/img/me.JPG";

  myImage.onload = () =>{
  	myImage.alt="Manoj Verma";
  	this.context.drawImage(myImage, 0, 0);
  	this.context.fillText("Manoj Verma", 10, 50);

  }


 */
}



}
