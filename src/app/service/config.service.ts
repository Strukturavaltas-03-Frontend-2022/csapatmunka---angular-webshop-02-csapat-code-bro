import { Injectable } from '@angular/core';

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

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Action', link: '/cat01' },
    { text: 'Drama', link: '/cat02' },
    { text: 'Comedy', link: '/cat03' },
    { text: 'Romantic', link: '/cat04' },
    { text: 'Thriller', link: '/cat05' },
  ];

  constructor() {}
}
