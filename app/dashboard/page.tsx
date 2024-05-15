import Headding from '@/components/headding'
import Link from 'next/link'
import React from 'react'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'


const companyUpdates = [
	{
		title: "New member of the dev team",
		content: "We are excited to welcome a new member to the team. They will be working on the new ticketing system and will be a great addition to the team as we continue to grow and expand our services to our customers.",
	},
	{
		title: "New website live",
		content: "We are excited to announce that our new website is now live. We have been working hard to bring you a new and improved experience and we hope you enjoy it. Please let us know if you have any feedback or suggestions for improvements.",
	},
	{
		title: "New office location",
		content: "We are excited to announce that we have moved to a new office location. Our new address is 123 Main St, Anytown, USA. We are excited to continue to grow and expand our services to our customers and look forward to seeing you at our new location.",
	},
]

function Dashboard() {
	return (
		<div className='md:m-10'>
			<Headding>Dashboard</Headding>
			<p className='m-auto max-w-[70rem] text-base lg:text-lg text-popover-foreground md:text-justify'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique voluptas, ipsam illo odit impedit recusandae fugit illum repellat laborum fuga excepturi eveniet at quod debitis expedita distinctio laudantium nulla, vel voluptatibus minus. Ullam perferendis vel beatae error natus repellendus modi voluptas recusandae quis labore sit temporibus vitae ipsa, doloremque explicabo voluptatem doloribus? Adipisci ex quia quisquam consectetur repellat iste fugit odio nam sint dolorem? Blanditiis provident suscipit labore, dolor nisi mollitia laborum pariatur tempore libero temporibus inventore saepe ratione.
			</p>
			<div className='block m-auto my-10 text-center md:my-16'>
				<Link href='/tickets' className="tracking-widest bg-primary font-semibold py-3 px-3 rounded-sm text-primary-foreground text-base md:text-lg">
					View Tickets
				</Link>
			</div>
			<Separator />
			<Headding>Company Updates</Headding>
			<div className='flex flex-col gap-5 items-center'>
				{
					companyUpdates.map((update) =>
						<Card className='max-w-[70rem]'>
							<CardHeader>
								<CardTitle className='text-lg md:text-xl'>{update.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{update.content}</p>
							</CardContent>
						</Card>
					)
				}
			</div>

		</div>
	)
}

export default Dashboard