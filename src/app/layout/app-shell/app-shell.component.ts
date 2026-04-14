import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { PRIMARY_NAV_ITEMS } from '../../core/constants/navigation';
import { GlobalLoadingOverlayComponent } from '../global-loading-overlay/global-loading-overlay.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent, GlobalLoadingOverlayComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  readonly navigationItems = PRIMARY_NAV_ITEMS;
}
