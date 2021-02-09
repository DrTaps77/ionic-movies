import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Films', url: '/films', icon: 'videocam' },
    { title: 'Séries', url: '/series', icon: 'videocam' },
    { title: 'Acteurs', url: '/acteurs', icon: 'people' },
  ];
  constructor() {}
}
