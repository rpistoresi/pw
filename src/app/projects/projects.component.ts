import { Component, OnInit } from '@angular/core';
import { Project } from './project.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ModernNerding',
      subtitle: 'A gathering place for nerdy couples',
      content: `Bringing real world experience about living
                as a couple who enjoys nerdy stuff.`,
      actions: [
        { prefix: 'fab', icon: 'angular' },
        { prefix: 'fab', icon: 'github' },
        { prefix: 'fab', icon: 'html5' },
        { prefix: 'fab', icon: 'css3' },
        { prefix: 'fab', icon: 'js' },
        { prefix: 'fab', icon: 'font-awesome' }
      ],
      url: '../../assets/img/kittens.jpg'
    },
    {
      title: 'Parallelizing Mandelbrot',
      subtitle: 'Static and dynamic load balancing',
      content: `This project uses the Message Passaging Interface
                (MPI) to complete the Mandelbrot fractal.`,
      actions: [ { prefix: 'fab', icon: 'github' } ],
      url: '../../assets/img/fractal.jpg'
    },
    {
      title: 'Personal Website',
      subtitle: 'Intro to Angular 7',
      content: `First iteration of my personal website using Angular 7.
                This was a fun way to build a single page web application
                using a modern framework.`,
      actions: [
        { prefix: 'fab', icon: 'angular' },
        { prefix: 'fab', icon: 'github' },
        { prefix: 'fab', icon: 'html5' },
        { prefix: 'fab', icon: 'css3' },
        { prefix: 'fab', icon: 'js' },
        { prefix: 'fab', icon: 'font-awesome' }
      ],
      url: '../../assets/img/dark.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
