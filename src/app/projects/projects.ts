import { Project } from './project.module';

export const PROJECTS: Project[] = [
  {
    title: 'MN',
    img: {
      src: './assets/img/nerd.jpg',
      alt: 'cute kittens'
    },
    content: `Exploring current nerdiness in blog form. Leveraging Docker to serve
      each component of the MEAN stack in separate containers.`,
    tools: [
      { prefix: 'fab', icon: 'aws' },
      { prefix: 'fab', icon: 'angular' },
      { prefix: 'fab', icon: 'docker' },
      { prefix: 'fab', icon: 'github' },
    ],
    url: null
  },
  {
    title: 'Personal Website',
    img: {
      src: './assets/img/personal-site.jpg',
      alt: 'Raymond Pistoresi website'
    },
    content: `First iteration of my personal website using Angular 7 and hosted on Github Pages.`,
    tools: [
      { prefix: 'fab', icon: 'angular' },
      { prefix: 'fab', icon: 'html5' },
      { prefix: 'fab', icon: 'css3' },
      { prefix: 'fab', icon: 'js' },
      { prefix: 'fab', icon: 'font-awesome' },
      { prefix: 'fab', icon: 'github' }
    ],
    url: 'https://github.com/rpistoresi/pw/'
  },
  {
    title: 'I Love Reno',
    img: {
      src: './assets/img/ilovereno.png',
      alt: 'I Love Reno homepage'
    },
    content: `A custom WordPress site with calendar, business event submission,
      and newsletter subscription. Built with a team at the University of Nevada, Reno
      as part of our senior project.`,
    tools: [
      { prefix: 'fab', icon: 'aws' },
      { prefix: 'fab', icon: 'php' },
      { prefix: 'fab', icon: 'wordpress' },
      { prefix: 'fab', icon: 'bitbucket' }
    ],
    url: 'https://github.com/rpistoresi/ilr/'
  },
  {
    title: 'Parallelizing Mandelbrot',
    img: {
      src: './assets/img/fractal.jpg',
      alt: 'mandelbrol fractal'
    },
    content: `This project implements the Mandelbrot fractal on a cluster
      using the Message Passaging Interface (MPI) with a hybrid
      load balancing technique.`,
    tools: [
      { prefix: 'fab', icon: 'github' }
    ],
    url: 'https://github.com/rpistoresi/parallelizing-mandelbrot/'
  },
];
