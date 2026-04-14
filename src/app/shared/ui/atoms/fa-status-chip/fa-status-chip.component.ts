import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Tag } from 'primeng/tag';
import { RequestStatus } from '../../../models/request.model';
import { getRequestStatusMeta } from '../../../utils/request-status.util';

@Component({
  selector: 'fa-status-chip',
  standalone: true,
  imports: [Tag],
  templateUrl: './fa-status-chip.component.html',
  styleUrl: './fa-status-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaStatusChipComponent {
  readonly status = input.required<RequestStatus>();

  readonly meta = computed(() => getRequestStatusMeta(this.status()));

  readonly label = computed(() => this.meta().label);
  readonly severity = computed(() => this.meta().severity);
}
