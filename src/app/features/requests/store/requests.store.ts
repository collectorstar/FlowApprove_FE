import { Injectable, computed, inject, signal } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { RequestSummary } from '../../../shared/models/request.model';
import { createAsyncState } from '../../../shared/types/async-state.type';

@Injectable()
export class RequestsStore {
  private readonly requestsService = inject(RequestsService);
  private readonly state = signal(createAsyncState<RequestSummary[]>([]));
  private readonly searchTerm = signal('');

  readonly isLoading = computed(() => this.state().status === 'loading');
  readonly error = computed(() => this.state().error);
  readonly search = computed(() => this.searchTerm());
  readonly rows = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const allRows = this.state().data;

    if (!term) {
      return allRows;
    }

    return allRows.filter(
      (row) =>
        row.title.toLowerCase().includes(term) ||
        row.id.toLowerCase().includes(term) ||
        row.workflow.toLowerCase().includes(term)
    );
  });
  readonly isEmpty = computed(
    () => this.state().status === 'success' && this.state().data.length === 0
  );
  readonly hasNoResults = computed(
    () => this.state().status === 'success' && this.state().data.length > 0 && this.rows().length === 0
  );

  load(): void {
    this.state.update((current) => ({ ...current, status: 'loading', error: null }));
    this.requestsService.getMyRequests().subscribe({
      next: (rows) => this.state.set({ status: 'success', data: rows, error: null }),
      error: () =>
        this.state.update((current) => ({
          ...current,
          status: 'error',
          error: 'Unable to load requests.'
        }))
    });
  }

  setSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
