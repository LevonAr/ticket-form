import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useAppContext } from '../contexts/AppContext';

const TicketForm = (props) => {
  const { ticketTypes } = props;
  const { setTotalAmount } = useAppContext();

  const initialTicketCounts = {};
  ticketTypes.forEach((ticket) => initialTicketCounts[ticket?.type] = 0);
  console.log('initialTicketCounts', initialTicketCounts);

  const [ticketCounts, setTicketCounts] = useState(initialTicketCounts);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let total = 0;
  const values = Object.values(ticketCounts);
  console.log('values', values);
  for (let i = 0; i < values.length; i++) {
    total += values[i] * ticketTypes[i]?.cost;
  };
  const formattedTotal = formatter.format(total / 100)
  console.log('total', total);
  
  useEffect(() => {
    setTotalAmount(formattedTotal);
  });

  const handleValueChange = (index, newValue) => {
    setTicketCounts({
      ...ticketCounts,
      [index]: newValue
    });
  };

  console.log('ticketCounts', ticketCounts);

  return (
    <div>
      <div className='text-md text-bold'>Select Tickets</div>
      {ticketTypes.map((ticket) => (
        <div className='ticket-row'>
          <div>
            <p  className='text-md'>{ticket.name.toUpperCase()}</p>
            <p>{ticket.description}</p>
            <p>{formatter.format(ticket.cost / 100)}</p>
          </div>
          <div className='ticket-counter'>
            <button 
              className='arrow-button'
              disabled={ticketCounts[ticket?.type] === 999 ? true : false}
              onClick={() => handleValueChange(ticket?.type, ticketCounts[ticket?.type] + 1)}>
                <FaCaretUp />
            </button>
              {ticketCounts[ticket?.type]}
            <button 
              className='arrow-button'
              disabled={ticketCounts[ticket?.type] === 0 ? true : false}
              onClick={() => handleValueChange(ticket?.type, ticketCounts[ticket?.type] - 1)}>
                <FaCaretDown />
            </button>
          </div>
        </div>
      ))}
      <div className='total-row text-md'>
        <p>TOTAL</p>
        <p>{formattedTotal}</p>
      </div>
    </div>
  );
};

export default TicketForm;