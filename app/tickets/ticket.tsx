import OptLink from '@/components/optional-link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TicketT } from '@/types';
import React from 'react';

interface TicketProps {
  ticket: TicketT;
  showEmail?: boolean;
  limitBody?: number;
  href?: string;
  children?: React.ReactNode;
}

function getBadgeVariant(priority: TicketT['priority']) {
  switch (priority) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'default';
    case 'low':
      return 'outline';
  }
}

function Ticket({ ticket, limitBody, showEmail, href }: TicketProps) {
  return (
    <Card>
      <OptLink isLink={href !== undefined} href={href || '#'}>
        <CardHeader>
          <CardTitle className="capitalize">{ticket.title}</CardTitle>
          {showEmail && (
            <CardDescription>Created by {ticket.user_email}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p>{ticket.body.slice(0, limitBody) + (limitBody ? '...' : '')}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Badge variant={getBadgeVariant(ticket.priority)}>
            Priority: {ticket.priority}
          </Badge>
        </CardFooter>
      </OptLink>
    </Card>
  );
}

export default Ticket;
