import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { DashboardData } from '../models/dashboard.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  getDashboardData(): Observable<DashboardData> {
    const data: DashboardData = {
      metrics: [
        { label: 'Open Requests', value: '128', delta: '+12 this week' },
        { label: 'Pending Approvals', value: '23', delta: '8 urgent today' },
        { label: 'Average Lead Time', value: '1.8d', delta: '-14% vs last month' }
      ],
      pendingApprovals: [
        { title: 'Marketing Budget 2026', owner: 'Jamie Fox', status: 'pending' },
        { title: 'New Vendor Onboarding', owner: 'Clara Wu', status: 'sent-back' },
        { title: 'Travel Expense Q2', owner: 'Rafael N.', status: 'pending' }
      ],
      activity: [
        'Travel expense request approved by Finance',
        'Procurement workflow version 4 published',
        'Vendor onboarding sent back for missing tax document'
      ],
      unreadNotifications: 7
    };

    return of(data).pipe(delay(700));
  }
}
