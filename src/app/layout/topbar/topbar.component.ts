import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { InputText } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { AppSessionStore } from '../../state/app-session.store';
import { OrganizationContextStore } from '../../state/organization-context.store';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Button, Avatar, InputText, Tag],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
  readonly session = inject(AppSessionStore);
  readonly organizationContext = inject(OrganizationContextStore);
  search = '';
}
