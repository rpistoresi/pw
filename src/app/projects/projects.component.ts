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
      title: 'Modern Nerding',
      subtitle: 'A blog about geeky stuff',
      img: { src: '../../assets/img/kittens.jpg', alt: 'cute kittens' },
      content: `Exploring current nerdiness.`,
      actions: [
        { prefix: 'fab', icon: 'angular', url: 'https://angular.io/' },
        { prefix: 'fab', icon: 'docker', url: 'https://docker.com/' },
        { prefix: 'fab', icon: 'github', url: 'https://github.com/' },
      ],
      url: 'https://en.wikipedia.org/wiki/Nerd'
    },
    {
      title: 'Personal Website',
      subtitle: 'Intro to Angular 7',
      img: { src: '../../assets/img/personal-site.jpg', alt: 'Raymond Pistoresi website' },
      content: `First iteration of my personal website using Angular 7.`,
      actions: [
        { prefix: 'fab', icon: 'angular', url: 'https://angular.io/' },
        { prefix: 'fab', icon: 'html5', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/' },
        { prefix: 'fab', icon: 'css3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3/' },
        { prefix: 'fab', icon: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
        { prefix: 'fab', icon: 'font-awesome', url: 'https://fontawesome.com/' },
        { prefix: 'fab', icon: 'github', url: 'https://github.com/' }
      ],
      url: 'http://localhost:4200'
    },
    {
      title: 'I Love Reno',
      subtitle: 'A magazine and events calendar designed for the local community',
      img: { src: '../../assets/img/ilovereno.png', alt: 'I Love Reno homepage' },
      content: `A magazine and events calendar specifically for locals`,
      actions: [
        { prefix: 'fab', icon: 'aws', url: 'https://aws.amazon.com/' },
        { prefix: 'fab', icon: 'php', url: 'http://www.php.net/' },
        { prefix: 'fab', icon: 'wordpress', url: 'https://wordpress.org/' },
        { prefix: 'fab', icon: 'bitbucket', url: 'https://bitbucket.org/' },
      ],
      url: 'https://google.com/'
    },
    {
      title: 'Parallelizing Mandelbrot',
      subtitle: 'Static and dynamic load balancing',
      img: { src: '../../assets/img/fractal.jpg', alt: 'mandelbrol fractal' },
      content: `This project implements the Mandelbrot fractal on a cluster
                using the Message Passaging Interface (MPI) and a hybrid
                load balancing technique.`,
      actions: [ { prefix: 'fab', icon: 'github', url: 'https://github.com/' } ],
      url: 'https://github.com/rpistoresi/parallelizing-mandelbrot/'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  openLink(uri: string) {
    window.open(uri, '_blank');
  }

}
