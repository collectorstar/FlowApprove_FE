import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/routes/dashboard.routes').then((m) => m.DASHBOARD_ROUTES)
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./features/requests/routes/requests.routes').then((m) => m.REQUESTS_ROUTES)
      },
      {
        path: 'approvals',
        loadChildren: () =>
          import('./features/approvals/routes/approvals.routes').then((m) => m.APPROVALS_ROUTES)
      },
      {
        path: 'workflows',
        loadChildren: () =>
          import('./features/workflows/routes/workflows.routes').then((m) => m.WORKFLOWS_ROUTES)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./features/notifications/routes/notifications.routes').then(
            (m) => m.NOTIFICATIONS_ROUTES
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/routes/profile.routes').then((m) => m.PROFILE_ROUTES)
      },
      {
        path: 'organization',
        loadChildren: () =>
          import('./features/organization/routes/organization.routes').then(
            (m) => m.ORGANIZATION_ROUTES
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
