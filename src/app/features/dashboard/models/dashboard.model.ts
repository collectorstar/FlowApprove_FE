import { RequestStatus } from '../../../shared/models/request.model';

export interface DashboardMetric {
  label: string;
  value: string;
  delta: string;
}

export interface DashboardApprovalItem {
  title: string;
  owner: string;
  status: RequestStatus;
}

export interface DashboardData {
  metrics: DashboardMetric[];
  pendingApprovals: DashboardApprovalItem[];
  activity: string[];
  unreadNotifications: number;
}
