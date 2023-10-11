import React, { useState } from 'react';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function PaymentForm() {
    const { totalAmount } = useAppContext();

    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cardInput, setCardInput] = useState('');
    const [expInput, setExpInput] = useState('');
    const [cvvInput, setCvvInput] = useState('');


    const formatCardInput = (input) => {
        const cleaned = input.replace(/\D/g, '');
        const match = cleaned.match(/^(.{1,4})(.{0,4})(.{0,4})(.{0,4})/) || [];
        return `${match[1] || ''} ${match[2] || ''} ${match[3] || ''} ${match[4] || ''}`.trim();
    };

    const formatExpInput = (input) => {
        if (!input) return '';
        const cleaned = input.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{1,2})(\d{0,2})/) || [];
        return `${match[1] || ''} ${match[2] || ''}`.trim();
    };

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstNameInput(value);
    };
    
    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastNameInput(value);
    };

    const handleAddressChange = (e) => {
        const value = e.target.value;
        setAddressInput(value);
    };    

    const handleCardChange = (e) => {
        const value = e.target.value;
        setCardInput(formatCardInput(value));
    };

    const handleExpChange = (e) => {
        const value = e.target.value;
        setExpInput(formatExpInput(value));
    };

    const handleCVVChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setCvvInput(value.slice(0, 3));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitObject = {
            firstNameInput,
            lastNameInput,
            addressInput,
            cardInput,
            expInput,
            cvvInput,            
        }
        console.log('[Card Details Submitted]','\n','Submit Details:', submitObject, '\n', 'Total Amount:', totalAmount);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className='two-inputs-wrapper'>
            <div className='input-wrapper'>
                    <input
                        type="text"
                        value={firstNameInput}
                        onChange={handleFirstNameChange}
                        maxLength={180}
                        placeholder="First Name"
                    />
                </div>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        value={lastNameInput}
                        onChange={handleLastNameChange}
                        maxLength={180}
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div className='input-wrapper'>
                <input
                    type="text"
                    value={addressInput}
                    onChange={handleAddressChange}
                    maxLength={180}
                    placeholder="Address"
                />
            </div>

            <p className='text-bold'>Payment Details</p>

            <div className='input-wrapper'>
                <input
                    type="text"
                    value={cardInput}
                    onChange={handleCardChange}
                    maxLength={19}
                    placeholder="0000 0000 0000 0000"
                />
            </div>

            <div className='two-inputs-wrapper'>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        value={expInput}
                        onChange={handleExpChange}
                        maxLength={7}
                        placeholder="MM / YY"
                    />
                </div>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        value={cvvInput}
                        onChange={handleCVVChange}
                        maxLength={3}
                        placeholder="123"
                    />
                </div>
            </div>

            <div className='input-wrapper'>
                <button type="submit">Get Tickets</button>
            </div>

        </form>
    );
}

export default PaymentForm;