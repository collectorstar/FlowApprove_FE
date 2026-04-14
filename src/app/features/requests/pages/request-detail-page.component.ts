import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';
import { FaLoadingStateComponent } from '../../../shared/ui/molecules/fa-loading-state/fa-loading-state.component';

@Component({
  selector: 'app-request-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    Button,
    FaStatusChipComponent,
    FaLoadingStateComponent
  ],
  templateUrl: './request-detail-page.component.html',
  styleUrl: './request-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestDetailPageComponent {
  readonly isPageLoading = signal(true);
  readonly timeline = [
    {
      title: 'Submitted',
      actor: 'Jamie Fox',
      time: '2026-04-10 09:15',
      status: 'submitted'
    },
    {
      title: 'Department Head Review',
      actor: 'Diane Ross',
      time: '2026-04-11 10:32',
      status: 'approved'
    },
    {
      title: 'Finance Director Review',
      actor: 'A. Bennett',
      time: 'Awaiting decision',
      status: 'pending'
    },
    {
      title: 'COO Sign-off',
      actor: 'Future step',
      time: 'Not started',
      status: 'draft'
    }
  ] as const;

  constructor() {
    setTimeout(() => this.isPageLoading.set(false), 1000);
  }
}
