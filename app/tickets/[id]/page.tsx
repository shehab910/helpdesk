import React from 'react';
import Ticket from '../ticket';
import { TicketT } from '@/types';
import Headding from '@/components/headding';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch(process.env.API_URL);
  const tickets = await res.json();
  return tickets.map((ticket: TicketT) => ({ id: `${ticket?.id}` }));
}

async function getTicket(id: number | string): Promise<TicketT> {
  const res = await fetch(`${process.env.API_URL}/${id}`, {
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
      <Ticket ticket={ticket} showEmail />
    </>
  );
}

export default TicketDetails;
