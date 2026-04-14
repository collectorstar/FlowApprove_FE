import { Routes } from '@angular/router';
import { MyRequestsPageComponent } from '../pages/my-requests-page.component';
import { RequestDetailPageComponent } from '../pages/request-detail-page.component';
import { RequestFormPageComponent } from '../pages/request-form-page.component';

export const REQUESTS_ROUTES: Routes = [
  {
    path: '',
    component: MyRequestsPageComponent
  },
  {
    path: 'create',
    component: RequestFormPageComponent,
    data: { mode: 'create' }
  },
  {
    path: ':id',
    component: RequestDetailPageComponent
  },
  {
    path: ':id/edit',
    component: RequestFormPageComponent,
    data: { mode: 'edit' }
  },
  {
    path: ':id/resubmit',
    component: RequestFormPageComponent,
    data: { mode: 'resubmit' }
  }
];
