import { useState } from "react";

export type Ticket = {
  id: string;
  type: string;
  count: number;
};

export function useTicketStore() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const addTicket = (ticket: Ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  const deleteTicket = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  return { tickets, addTicket, deleteTicket };
}
