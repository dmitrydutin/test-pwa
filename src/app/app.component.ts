import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items = [
    { id: 0, text: 'Все' },
    { id: 1, text: 'Одежда' },
    { id: 2, text: 'Базовый гардероб' },
    { id: 3, text: 'Обувь' },
    { id: 4, text: 'Аксессуары' },
  ];

  onChange(index: number): void {
    console.log('onChange', index);
  }
}
