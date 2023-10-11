import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import TicketForm from "./TicketForm";
import PaymentForm from "./PaymentForm";


function BandForm({ band }) {
  const [totalAmount, setTotalAmount] = useState(0);
  
  return (
    <div>
      <Header band={band} />
      <main className='grid-wrapper'>
        <div>
          <Hero band={band} />
        </div>
        <div className='grey-background'>
          <TicketForm ticketTypes={band?.ticketTypes} />
          <PaymentForm/>
        </div>
      </main>
    </div>
  );
}

export default BandForm;
