import React from 'react';
import Ticket from '../ticket';
import { TicketT } from '@/types';
import Headding from '@/components/headding';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();
  return tickets.map((ticket: TicketT) => ({ id: ticket.id.toString() }));
}

async function getTicket(id: number | string): Promise<TicketT> {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
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
