import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrganizationContextStore {
  readonly activeWorkspace = signal('Headquarters');
  readonly activePlan = signal('Enterprise');
}
