import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/WorkExperience';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skills: Skills[] = [];
  languages: Language[] = [];
  workExperience: WorkExperience[] = [];
  constructor() {
    this.setSkills();
    this.setLanguage();
    this.addWorkExperience();
   }

  ngOnInit() {

  }
  setSkills() {
    this.skills.push( new Skills( 'Java 8, Core Java', 80));
    this.skills.push( new Skills( 'Framworks: Spring Boot, Spring MVC, Hibernate', 80));
    this.skills.push( new Skills( 'Frontend: Angular, Angular Material BootStrap, Html & CSS', 60));
    this.skills.push( new Skills( 'Database : Oracle, MySql, sql', 50));
  }

  setLanguage() {
    this.languages.push( new Language( 'English', 100));
    this.languages.push( new Language( 'Hindi', 100));
    
  }

  addWorkExperience() {
   this.workExperience.push(this.bnpWorkExperience());
   this.workExperience.push(this.infosysExperience());
   this.workExperience.push(this.fortuneInfoCommExperience());
  }

  bnpWorkExperience(): WorkExperience {
    const exp = new WorkExperience();
    exp.role = 'Senior Software Engineer';
    exp.startDate = 'Dec- 2017';
    exp.endDate = 'Current';
    exp.company = 'BNP PARIBAS ISPL';
    exp.summary = `Design and developed the webservices using Spring Boot, hibernate,
     and developed UI screens in Angular for a digital web app which is used by the bank user.
     Communicated with business users to gather requirements. `;
    return exp;
  }

  infosysExperience(): WorkExperience {
    const exp = new WorkExperience();
    exp.role = 'Techonology Analyst';
    exp.startDate = 'Feb- 2014';
    exp.endDate = 'Dec- 2017';
    exp.company = 'Infosys Limited';
    exp.summary = `Worked on application development and maintenance projects, developed application using Java, JSP, Spring  MVC
    Jquery, Sql. Developed REST and SOAP webservices for telecom clients.`;
    return exp;
  }

  fortuneInfoCommExperience(): WorkExperience {
    const exp = new WorkExperience();
    exp.role = 'Jr. Programmer';
    exp.startDate = 'Aug- 2013';
    exp.endDate = 'Feb- 2014';
    exp.company = 'Fortune Infocomm Pvt. Ltd.';
    exp.summary = `Started professional career as Java Developer. Design , developed and tested the application using Java, JSP, servlet.`;
    return exp;
  }
}


export class Skills {
  name: string;
  level: string;

  constructor(name, level) {
    this.name = name;
    this.level = level + '%';
 }
}

export class Language {
  name: string;
  level: string;

  constructor(name, level) {
    this.name = name;
    this.level = level + '%';
 }
}
