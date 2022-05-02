import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  getCounterText = () => $localize`:@@counterTextCode:Sheep Count: ${this.counter}`;

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    if (value !== this._language) {
      localStorage.setItem('language', value);
      window.location.reload();
    }
  }
  private _language!: string;

  date = new Date();

  constructor() {
    this._language = localStorage.getItem('language') ?? 'en-US';
  }

  updateLanguage(event: Event) {
    // @ts-ignore
    this.language = event.target.value;
  }
}
