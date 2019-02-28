import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  jobs = [
    {
      company: 'Meridian Valley Lab',
      position: 'Software Developer',
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
      company: 'University of Nevada, Reno',
      position: 'Teaching Assistant',
      summary: `Prepare key and grade homework and exams for
        Reliability & Security of Computing Systems course`,
      bullets: [
        'Build apps',
        'Debug code',
        'Drink coffee'
      ],
      date: '02/2017- 05/2017' },
    {
      company: 'NV Energy',
      position: 'Engineering and IT, Student Intern',
      summary: `Developed website for facile document retrieval for department\
       and maintained Vegetation Department database`,
      bullets: [
        'Build apps',
        'Debug code',
        'Drink coffee'
      ],
      date: '06/2015 - 06/2017' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
