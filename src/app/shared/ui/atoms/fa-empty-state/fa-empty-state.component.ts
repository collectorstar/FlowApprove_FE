import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'fa-empty-state',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './fa-empty-state.component.html',
  styleUrl: './fa-empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaEmptyStateComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly icon = input('pi pi-inbox');
  readonly actionLabel = input<string | null>(null);
}
