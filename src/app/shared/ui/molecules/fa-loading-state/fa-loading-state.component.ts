import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaSpinnerComponent } from '../../atoms/fa-spinner/fa-spinner.component';

@Component({
  selector: 'fa-loading-state',
  standalone: true,
  imports: [CommonModule, FaSpinnerComponent],
  templateUrl: './fa-loading-state.component.html',
  styleUrl: './fa-loading-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaLoadingStateComponent {
  readonly title = input('Loading content');
  readonly description = input('Please wait while FlowApprove prepares the data.');
  readonly variant = input<'page' | 'panel' | 'inline'>('panel');
}
