import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppSessionStore {
  readonly userName = signal('Alex Carter');
  readonly organizationName = signal('Northstar Operations');
  readonly pendingNotifications = signal(7);
  readonly initials = computed(() =>
    this.userName()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  );
}
