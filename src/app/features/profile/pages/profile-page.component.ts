import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avatar } from 'primeng/avatar';
import { AppSessionStore } from '../../../state/app-session.store';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, Avatar],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  readonly session = inject(AppSessionStore);
}
