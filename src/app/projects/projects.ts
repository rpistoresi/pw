import { Project } from './project.module';

export const PROJECTS: Project[] = [
  {
    title: 'MN',
    img: {
      src: '../../assets/img/kittens.jpg',
      alt: 'cute kittens'
    },
    content: `Exploring current nerdiness in blog form. Leveraging Docker to serve
      each component of the MEAN stack in separate containers.`,
    tools: [
      { prefix: 'fab', icon: 'aws', url: 'https://aws.amazon.com/' },
      { prefix: 'fab', icon: 'angular', url: 'https://angular.io/' },
      { prefix: 'fab', icon: 'docker', url: 'https://docker.com/' },
      { prefix: 'fab', icon: 'github', url: 'https://github.com/' },
    ],
    url: null
  },
  {
    title: 'Personal Website',
    img: {
      src: '../../assets/img/personal-site.jpg',
      alt: 'Raymond Pistoresi website'
    },
    content: `First iteration of my personal website using Angular 7 and hosted on Github Pages.`,
    tools: [
      {
        prefix: 'fab',
        icon: 'angular',
        url: 'https://angular.io/'
      },
      { prefix: 'fab', icon: 'html5', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/' },
      { prefix: 'fab', icon: 'css3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3/' },
      { prefix: 'fab', icon: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
      { prefix: 'fab', icon: 'font-awesome', url: 'https://fontawesome.com/' },
      { prefix: 'fab', icon: 'github', url: 'https://github.com/' }
    ],
    url: 'https://github.com/rpistoresi/pw/'
  },
  {
    title: 'I Love Reno',
    img: {
      src: '../../assets/img/ilovereno.png',
      alt: 'I Love Reno homepage'
    },
    content: `A custom WordPress site with calendar, business event submission,
      and newsletter subscription. Built with a team at the University of Nevada, Reno
      as part of our senior project.`,
    tools: [
      { prefix: 'fab', icon: 'aws', url: 'https://aws.amazon.com/' },
      { prefix: 'fab', icon: 'php', url: 'http://www.php.net/' },
      { prefix: 'fab', icon: 'wordpress', url: 'https://wordpress.org/' },
      { prefix: 'fab', icon: 'bitbucket', url: 'https://bitbucket.org/' },
    ],
    url: 'https://github.com/rpistoresi/ilovereno/'
  },
  {
    title: 'Parallelizing Mandelbrot',
    img: {
      src: '../../assets/img/fractal.jpg',
      alt: 'mandelbrol fractal'
    },
    content: `This project implements the Mandelbrot fractal on a cluster
      using the Message Passaging Interface (MPI) with a hybrid
      load balancing technique.`,
    tools: [
      { prefix: 'fab', icon: 'github', url: 'https://github.com/' }
    ],
    url: 'https://github.com/rpistoresi/parallelizing-mandelbrot/'
  },
];
