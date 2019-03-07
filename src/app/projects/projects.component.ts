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
      subtitle: 'A blog about geeky stuff',
      img: '../../assets/img/kittens.jpg',
      content: `Exploring current nerdiness.`,
      actions: [
        { prefix: 'fab', icon: 'angular', url: 'https://angular.io/' },
        { prefix: 'fab', icon: 'github', url: 'https://github.com/' },
        { prefix: 'fab', icon: 'font-awesome', url: 'https://fontawesome.com/' },
        { prefix: 'fab', icon: 'docker', url: 'https://docker.com/' }
      ],
    },
    {
      title: 'Parallelizing Mandelbrot',
      subtitle: 'Static and dynamic load balancing',
      img: '../../assets/img/fractal.jpg',
      content: `This project uses the Message Passaging Interface
                (MPI) to complete the Mandelbrot fractal.`,
      actions: [ { prefix: 'fab', icon: 'github', url: 'https://github.com/' } ],
    },
    {
      title: 'Personal Website',
      subtitle: 'Intro to Angular 7',
      img: '../../assets/img/dark.jpg',
      content: `First iteration of my personal website using Angular 7.`,
      actions: [
        { prefix: 'fab', icon: 'angular', url: 'https://angular.io/' },
        { prefix: 'fab', icon: 'github', url: 'https://github.com/' },
        { prefix: 'fab', icon: 'html5', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/' },
        { prefix: 'fab', icon: 'css3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3/' },
        { prefix: 'fab', icon: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
        { prefix: 'fab', icon: 'font-awesome', url: 'https://fontawesome.com/' }
      ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  doSomething() {
    console.log('clicked');
  }

}
