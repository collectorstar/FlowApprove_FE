import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';
import { FaSkeletonBlockComponent } from '../../../shared/ui/atoms/fa-skeleton-block/fa-skeleton-block.component';
import { FaEmptyStateComponent } from '../../../shared/ui/atoms/fa-empty-state/fa-empty-state.component';
import { DashboardStore } from '../store/dashboard.store';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, Button, FaStatusChipComponent, FaSkeletonBlockComponent, FaEmptyStateComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardStore]
})
export class DashboardPageComponent {
  readonly store = inject(DashboardStore);

  constructor() {
    this.store.load();
  }
}
