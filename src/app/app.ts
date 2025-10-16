import { Component, signal } from '@angular/core';

import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
