import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs = [
    {
      acronym: 'MVL',
      company: 'Meridian Valley Lab',
      position: 'Software Developer',
      icon: 'flask',
      summary: `One of two developers responsible for the design and creation
        of in-house software solutions for high throughput diagnostics laboratory.
        Collaborate across the entire company including scientists, technicians,
        and lab management to gather requirements, define project scope, and
        launch efficient products. Support business by developing tools and
        reports for new tests the lab brings to market`,
      bullets: [
        'Build apps',
        'Debug code',
        'Drink coffee'
      ],
      date: '08/2017 - Present' },
    {
      acronym: 'UNR',
      company: 'University of Nevada, Reno',
      position: 'Teaching Assistant',
      icon: 'chalkboard-teacher',
      summary: `Prepare key and grade homework and exams for
        Reliability & Security of Computing Systems course`,
      bullets: [
        'Build apps',
        'Debug code',
        'Drink coffee'
      ],
      date: '02/2017- 05/2017' },
    {
      acronym: 'NVE',
      company: 'NV Energy',
      position: 'Engineering & IT Internship',
      icon: 'power-off',
      summary: `Developed website for facile document retrieval for department\
       and maintained Vegetation Department database`,
      bullets: [
        'Build apps',
        'Debug code',
        'Drink coffee'
      ],
      date: '06/2015 - 06/2017' }
  ];
  step = 0;

  constructor() { }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
