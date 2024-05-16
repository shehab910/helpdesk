export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export interface TicketT {
  title: string;
  body: string;
  priority: 'high' | 'medium' | 'low';
  user_email: string;
  id: string;
}
