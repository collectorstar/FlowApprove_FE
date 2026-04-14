import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-organization-page',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './organization-page.component.html',
  styleUrl: './organization-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationPageComponent {}
