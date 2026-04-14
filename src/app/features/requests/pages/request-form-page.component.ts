import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-request-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button, InputText, Select, Textarea],
  templateUrl: './request-form-page.component.html',
  styleUrl: './request-form-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestFormPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);

  readonly mode = this.route.snapshot.data['mode'] as 'create' | 'edit' | 'resubmit';
  readonly requestTypes = [
    { label: 'Budget Request', value: 'budget' },
    { label: 'Vendor Onboarding', value: 'vendor' },
    { label: 'Expense Reimbursement', value: 'expense' }
  ];

  readonly form = this.formBuilder.group({
    title: ['Marketing Budget 2026', [Validators.required]],
    requestType: ['budget', [Validators.required]],
    department: ['Marketing', [Validators.required]],
    amount: ['180000', [Validators.required]],
    businessJustification: [
      'Budget allocation for regional campaign expansion and demand generation.',
      [Validators.required]
    ]
  });
  readonly isSubmitting = signal(false);

  get pageTitle(): string {
    switch (this.mode) {
      case 'edit':
        return 'Edit Request';
      case 'resubmit':
        return 'Resubmit Request';
      default:
        return 'Create Request';
    }
  }

  submit(): void {
    if (this.form.invalid || this.isSubmitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => this.isSubmitting.set(false), 1200);
  }
}
