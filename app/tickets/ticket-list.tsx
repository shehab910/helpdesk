import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Ticket {
	title: string;
	body: string;
	priority: "high" | "medium" | "low";
	user_email: string;
	id: string;
}

async function getTickets(): Promise<Ticket[]> {
	const tickets = await fetch('http://localhost:4000/tickets', {
		next: {
			revalidate: 0, // Disable cache
		}
	});
	return tickets.json();
}

function getBadgeVariant(priority: Ticket['priority']) {
	switch (priority) {
		case 'high':
			return 'destructive';
		case 'medium':
			return 'default';
		case 'low':
			return 'outline';
	}
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
		<div className='flex flex-col gap-5 items-center'>
			{tickets?.map((ticket) =>
				<Card key={ticket.id} className="w-11/12 max-w-[70rem]">
					<CardHeader>
						<CardTitle className="capitalize">{ticket.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p>{ticket.body.slice(0, 200)}...</p>
					</CardContent>
					<CardFooter className="flex float-end">
						<Badge variant={getBadgeVariant(ticket.priority)}>Priority: {ticket.priority}</Badge>
					</CardFooter>
				</Card>
			)}
		</div>
	);
}

export default TicketList