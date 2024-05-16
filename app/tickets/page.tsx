import Headding from '@/components/headding';
import React, { Suspense } from 'react';
import TicketList from './ticket-list';
import Loading from '../loading';

function Tickets() {
  return (
    <>
      <Headding>Tickets</Headding>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </>
  );
}

export default Tickets;
