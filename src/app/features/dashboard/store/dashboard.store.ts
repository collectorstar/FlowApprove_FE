import { Injectable, computed, inject, signal } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { DashboardData } from '../models/dashboard.model';
import { createAsyncState } from '../../../shared/types/async-state.type';

const INITIAL_DATA: DashboardData = {
  metrics: [],
  pendingApprovals: [],
  activity: [],
  unreadNotifications: 0
};

@Injectable()
export class DashboardStore {
  private readonly dashboardService = inject(DashboardService);
  private readonly state = signal(createAsyncState(INITIAL_DATA));

  readonly metrics = computed(() => this.state().data.metrics);
  readonly pendingApprovals = computed(() => this.state().data.pendingApprovals);
  readonly activity = computed(() => this.state().data.activity);
  readonly unreadNotifications = computed(() => this.state().data.unreadNotifications);
  readonly isLoading = computed(() => this.state().status === 'loading');
  readonly isEmpty = computed(
    () => this.state().status === 'success' && this.state().data.metrics.length === 0
  );
  readonly error = computed(() => this.state().error);

  load(): void {
    this.state.update((current) => ({ ...current, status: 'loading', error: null }));
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => this.state.set({ status: 'success', data, error: null }),
      error: () =>
        this.state.update((current) => ({
          ...current,
          status: 'error',
          error: 'Unable to load dashboard data.'
        }))
    });
  }
}
