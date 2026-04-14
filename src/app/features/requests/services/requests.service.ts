import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { RequestSummary } from '../../../shared/models/request.model';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  getMyRequests(): Observable<RequestSummary[]> {
    const rows: RequestSummary[] = [
      {
        id: 'REQ-24018',
        title: 'Marketing Budget 2026',
        workflow: 'Department Budget Approval',
        status: 'pending',
        currentStep: 'Finance Director',
        requester: 'Jamie Fox',
        submittedAt: '2026-04-10 09:15',
        updatedAt: '2026-04-14 11:24'
      },
      {
        id: 'REQ-24012',
        title: 'New Vendor Onboarding',
        workflow: 'Vendor Compliance Review',
        status: 'sent-back',
        currentStep: 'Procurement Review',
        requester: 'Clara Wu',
        submittedAt: '2026-04-08 16:48',
        updatedAt: '2026-04-14 09:05'
      },
      {
        id: 'REQ-23991',
        title: 'Travel Expense Q2',
        workflow: 'Expense Reimbursement',
        status: 'approved',
        currentStep: 'Completed',
        requester: 'Rafael N.',
        submittedAt: '2026-04-05 13:10',
        updatedAt: '2026-04-11 08:42'
      }
    ];

    return of(rows).pipe(delay(900));
  }
}
