import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../core/services/loading.service';
import { FaSpinnerComponent } from '../../shared/ui/atoms/fa-spinner/fa-spinner.component';

@Component({
  selector: 'app-global-loading-overlay',
  standalone: true,
  imports: [CommonModule, FaSpinnerComponent],
  templateUrl: './global-loading-overlay.component.html',
  styleUrl: './global-loading-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalLoadingOverlayComponent {
  readonly loadingService = inject(LoadingService);
}
