import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  items = []; // default allocation for initial animation
  tabs = [
    {
      default: true,
      label: 'Overview',
      title: 'Hi, I\'m Ray!',
      picture: '../../assets/img/me.jpeg',
      content1: `I am a software engineer that enjoys crafting solutions using technology.`,
      content2: `Based in Seattle, WA with my wife I enjoy working as a full stack developer,
        drinking far too much coffee, and spoiling our cat.`,
      list: []
    },
    {
      default: false,
      label: 'Skills',
      title: 'Things I\'ve Used',
      picture: '../../assets/img/programming-code.jpg',
      list: [
        {
          item: 'Languages: C/C++, VBA, T-SQL, HTML, CSS, TypeScript, JavaScript, Python',
          icon: 'language' },
        {
          item: 'Databases: MS SQL Server, MySQL',
          icon: 'database' },
        {
          item: 'Skills: AWS, Git, Docker, Trello, MS Access, Slurm, MPI, WordPress',
          icon: 'glasses' },
        {
          item: 'Stacks: MEAN, LAMP, WAMP',
          icon: 'bars' },
        {
          item: 'Platforms: Linux, Windows, Mac',
          icon: 'laptop'}
      ]
    },
    {
      default: false,
      label: 'Interests',
      title: 'What I do for fun',
      picture: '../../assets/img/kittens.jpg',
      list: [
        { item: 'all things coffee', icon: 'coffee' },
        { item: 'our cat Rukia', icon: 'cat' },
        { item: 'watch anime', icon: 'tv' },
        { item: 'opera and syphony', icon: 'music' }
      ]
    }
  ];

  constructor() { }

  logAnimation(_event) {
    // console.log(_event);
  }

  showItems(event) {
    if (this.items) {
      this.items = [];
    }
    if (event.index > 0) {
      for (let item of this.tabs[event.index].list) {
        this.items.push(item);
        console.log(item.item);
        console.log(item.icon);
      }
    }
  }

}
