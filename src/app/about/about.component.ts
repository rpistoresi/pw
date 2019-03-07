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
      picLeft: true,
      content1: `I work as software engineer based in Seattle, WA and enjoys,
       making solutions using technology.`,
      content2: `Quickly after graduating from the Unversity of Nevada, Reno,
        I moved to the PNW with my wife and started working as a full stack developer.`,
      list: []
    },
    {
      default: false,
      label: 'Skills',
      title: 'Things I\'ve Used',
      picture: '../../assets/img/programming-code.jpg',
      picLeft: false,
      list: [
        {
          item: 'Languages: C/C++, VBA, T-SQL, HTML, CSS, TypeScript, JavaScript, Python',
          skill: 'hello',
          icon: 'language' },
        {
          item: 'Databases: MS SQL Server, MySQL',
          skill: 'hello',
          icon: 'database' },
        {
          item: 'Skills: AWS, Git, Docker, Trello, MS Access, Slurm, MPI, WordPress',
          skill: 'hello',
          icon: 'glasses' },
        {
          item: 'Stacks: MEAN, LAMP, WAMP',
          skill: 'hello',
          icon: 'bars' },
        {
          item: 'Platforms: Linux, Windows, Mac',
          skill: 'hello',
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
