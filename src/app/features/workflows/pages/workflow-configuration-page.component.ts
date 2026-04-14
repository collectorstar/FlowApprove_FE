import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { FaStatusChipComponent } from '../../../shared/ui/atoms/fa-status-chip/fa-status-chip.component';

@Component({
  selector: 'app-workflow-configuration-page',
  standalone: true,
  imports: [CommonModule, Button, FaStatusChipComponent],
  templateUrl: './workflow-configuration-page.component.html',
  styleUrl: './workflow-configuration-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowConfigurationPageComponent {
  readonly steps = [
    'Requester submits request',
    'Department Head reviews',
    'Finance Director approves',
    'COO sign-off completes workflow'
  ];
}
