import { RequestStatus } from '../models/request.model';

export interface RequestStatusMeta {
  label: string;
  severity: 'secondary' | 'info' | 'warn' | 'success' | 'danger';
}

const REQUEST_STATUS_META: Record<RequestStatus, RequestStatusMeta> = {
  draft: { label: 'Draft', severity: 'secondary' },
  submitted: { label: 'Submitted', severity: 'info' },
  pending: { label: 'Pending', severity: 'warn' },
  approved: { label: 'Approved', severity: 'success' },
  rejected: { label: 'Rejected', severity: 'danger' },
  'sent-back': { label: 'Sent Back', severity: 'warn' },
  cancelled: { label: 'Cancelled', severity: 'danger' }
};

export const getRequestStatusMeta = (status: RequestStatus): RequestStatusMeta =>
  REQUEST_STATUS_META[status];
