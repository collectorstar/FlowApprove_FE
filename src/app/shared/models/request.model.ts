export type RequestStatus =
  | 'draft'
  | 'submitted'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'sent-back'
  | 'cancelled';

export interface RequestSummary {
  id: string;
  title: string;
  workflow: string;
  status: RequestStatus;
  currentStep: string;
  requester: string;
  submittedAt: string;
  updatedAt: string;
}
