import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Video Library';

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Action', link: '/cat01' },
    { text: 'Drama', link: '/cat02' },
    { text: 'Comedy', link: '/cat03' },
    { text: 'Romantic', link: '/cat04' },
    { text: 'Thriller', link: '/cat05' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() {}
}
