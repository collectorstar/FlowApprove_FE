import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';

@Component({
  selector: 'app-pending-approvals-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TableModule, Button, FaStatusChipComponent],
  templateUrl: './pending-approvals-page.component.html',
  styleUrl: './pending-approvals-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingApprovalsPageComponent {
  readonly rows = [
    {
      id: 'REQ-24018',
      title: 'Marketing Budget 2026',
      requester: 'Jamie Fox',
      step: 'Finance Director',
      age: '2d 4h',
      status: 'pending' as const
    },
    {
      id: 'REQ-24015',
      title: 'Office Relocation Deposit',
      requester: 'Morgan Lee',
      step: 'COO Sign-off',
      age: '6h',
      status: 'pending' as const
    }
  ];
}
