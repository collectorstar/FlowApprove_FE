import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'fa-skeleton-block',
  standalone: true,
  imports: [CommonModule, Skeleton],
  templateUrl: './fa-skeleton-block.component.html',
  styleUrl: './fa-skeleton-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaSkeletonBlockComponent {
  readonly width = input('100%');
  readonly height = input('1rem');
  readonly borderRadius = input('12px');
}
