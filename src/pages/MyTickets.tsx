import { useEffect, useState } from "react";

type Ticket = {
  id: number;
  dataUrl: string;
  formData: any;
};

const MyTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("myTickets") || "[]");
    setTickets(stored);
  }, []);

  const deleteTicket = (id: number) => {
    const filtered = tickets.filter((t) => t.id !== id);
    setTickets(filtered);
    localStorage.setItem("myTickets", JSON.stringify(filtered));
  };

  return (
    <div className="bg-(--primaryColor) h-screen">
      {tickets.length === 0 ? (
        <p className="text-center">No Tickets Found.</p>
      ) : (
        <div className="flex justify-center md:justify-normal gap-4 text-black ">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border p-3 rounded bg-(--primaryColor) "
            >
              <img src={ticket.dataUrl} alt="Ticket" width={200} height={600} />
              <button
                className="hover:text-red-600 bg-white rounded-2xl mt-2 p-2 cursor-pointer"
                type="button"
                onClick={() => deleteTicket(ticket.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTickets;
