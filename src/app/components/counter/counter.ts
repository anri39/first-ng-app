import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
  standalone: true,
  imports: [CommonModule],
})
export class Counter {
  initialIncrement = signal(0);

  increment() {
    this.initialIncrement.update((prev) => prev + 1);
  }

  decrement() {
    this.initialIncrement.update((prev) => prev - 1);
  }

  reset() {
    this.initialIncrement.set(0);
  }
}
