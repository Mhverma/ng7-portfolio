import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

@ViewChild('skillsetcanvas') skillsetcanvas: ElementRef;

public context: CanvasRenderingContext2D;

 skillTitle = 'Technical Skills';
 skillsList: string[];
 toolsList: string[];
  constructor() { 
  	this.skillsList =  new Array('Java 8', 'Core Java', 'Spring Boot', 'JPA', 'Hibernate', 'Angular', 'HTML-CSS', 'JavaScript', 'BootStrap');
  	this.toolsList = new Array('Windows and Unix', 'MySql', 'Oracle','Git','Maven', 'Ant', 'Jenkins','SonarQube','Eclipse');
  }
 
  ngOnInit() {
  }



}
