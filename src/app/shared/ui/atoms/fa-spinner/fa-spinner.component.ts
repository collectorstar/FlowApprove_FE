import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'fa-spinner',
  standalone: true,
  imports: [CommonModule, ProgressSpinner],
  templateUrl: './fa-spinner.component.html',
  styleUrl: './fa-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaSpinnerComponent {
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly label = input('Loading');
}
