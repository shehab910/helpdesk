import { TicketT } from '@/types';
import Ticket from './ticket';

async function getTickets(): Promise<TicketT[]> {
  const tickets = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0, // Disable cache
    },
  });
  return tickets.json();
}

async function TicketList() {
  const tickets = await getTickets();
  if (tickets?.length === 0) {
    return (
      <p className="text-center capitalize text-2xl font-semibold tracking-wider">
        No tickets found!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      {tickets?.map((ticket) => (
        <Ticket
          href={`/tickets/${ticket.id}`}
          ticket={ticket}
          limitBody={200}
        />
      ))}
    </div>
  );
}

export default TicketList;
