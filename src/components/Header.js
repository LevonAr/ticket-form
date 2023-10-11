import { FaCalendar, FaMapPin, FaSortAmountDown, FaSortAmountUpAlt } from 'react-icons/fa';

const Header = (props) => {
  const { band = {} } = props;
  const { 
    date = 0,
    location = '',
    name = '',
  } = band;

  const formattedDate = new Date(date).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  console.log('formattedDate', formattedDate);
  return (
    <header className="header">
      <div className="text-lg text-bold">{name}</div>
      <div><FaCalendar/> {formattedDate}</div>
      <div><FaMapPin /> {location}</div>
    </header>
  );
};

export default Header;