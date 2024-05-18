import { TicketT } from '@/types';
import Ticket from './ticket';

async function getTickets(): Promise<TicketT[]> {
  const tickets = await fetch(process.env.API_URL, {
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
      <p className="text-center capitalize text-2xl font-semibold">
        No tickets found!
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {tickets?.map((ticket) => (
        <Ticket
          key={ticket.id}
          href={`/tickets/${ticket.id}`}
          ticket={ticket}
          limitBody={200}
        />
      ))}
    </div>
  );
}

export default TicketList;
