import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';
import { FaSkeletonBlockComponent } from '../../../shared/ui/atoms/fa-skeleton-block/fa-skeleton-block.component';
import { FaEmptyStateComponent } from '../../../shared/ui/atoms/fa-empty-state/fa-empty-state.component';
import { RequestsStore } from '../store/requests.store';

@Component({
  selector: 'app-my-requests-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    Button,
    InputText,
    TableModule,
    FaStatusChipComponent,
    FaSkeletonBlockComponent,
    FaEmptyStateComponent
  ],
  templateUrl: './my-requests-page.component.html',
  styleUrl: './my-requests-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RequestsStore]
})
export class MyRequestsPageComponent {
  readonly store = inject(RequestsStore);
  search = '';

  constructor() {
    this.store.load();
  }
}
