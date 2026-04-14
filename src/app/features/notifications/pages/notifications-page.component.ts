import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, FaStatusChipComponent],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsPageComponent {
  readonly items = [
    {
      title: 'Finance Director requested clarification',
      detail: 'Marketing Budget 2026 needs a revised quarterly split.',
      status: 'sent-back' as const
    },
    {
      title: 'Travel Expense Q2 approved',
      detail: 'Expense reimbursement was completed and posted.',
      status: 'approved' as const
    }
  ];
}
