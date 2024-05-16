import React from 'react';
import Ticket from '../ticket';
import { TicketT } from '@/types';
import Headding from '@/components/headding';

async function getTicket(id: number | string): Promise<TicketT> {
  const tickets = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0, // Disable cache
    },
  });
  return tickets.json();
}

interface TicketDetailsProps {
  params: {
    id: string;
  };
}

async function TicketDetails({ params }: TicketDetailsProps) {
  const ticket = await getTicket(params.id);
  return (
    <>
      <Headding>Ticket Details</Headding>
      <div className="flex flex-col items-center">
        <Ticket ticket={ticket} showEmail />
      </div>
    </>
  );
}

export default TicketDetails;
