import { Routes } from '@angular/router';
import { PendingApprovalsPageComponent } from '../pages/pending-approvals-page.component';

export const APPROVALS_ROUTES: Routes = [
  {
    path: '',
    component: PendingApprovalsPageComponent
  }
];
