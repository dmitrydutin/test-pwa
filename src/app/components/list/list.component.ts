import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() items!: any[];
  @Output() change = new EventEmitter<number>();

  selectedIndex = 0;

  onClick(index: number): void {
    this.selectedIndex = index;
    this.change.emit(index);
  }
}
