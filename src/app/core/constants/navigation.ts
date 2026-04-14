import { NavigationItem } from '../../shared/types/navigation-item.type';

export const PRIMARY_NAV_ITEMS: NavigationItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/dashboard',
    description: 'Overview of requests, approvals, and activity'
  },
  {
    label: 'My Requests',
    icon: 'pi pi-file',
    route: '/requests',
    description: 'Track drafts, submissions, and outcomes'
  },
  {
    label: 'Pending Approvals',
    icon: 'pi pi-inbox',
    route: '/approvals',
    description: 'Review approvals that need action'
  },
  {
    label: 'Workflows',
    icon: 'pi pi-sitemap',
    route: '/workflows',
    description: 'Configure dynamic approval workflows'
  },
  {
    label: 'Notifications',
    icon: 'pi pi-bell',
    route: '/notifications',
    description: 'See recent alerts and updates'
  },
  {
    label: 'Organization',
    icon: 'pi pi-building',
    route: '/organization',
    description: 'Manage tenant and workspace settings'
  }
];
