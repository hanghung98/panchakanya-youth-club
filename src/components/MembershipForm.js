import React, { useState } from 'react';
import './MembershipForm.css';
import clubImage from '../assets/club-image.jpg'; // Import the image

const MembershipForm = ({ addMember }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMember({ name, age, address, phoneNumber });
        setName('');
        setAge('');
        setAddress('');
        setPhoneNumber('');
    };

    return (
        <div className="container">
            <h2>Membership Form</h2>
            <div className="form-container">
                <img src={clubImage} alt="Club" className="club-image" />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Add Member</button>
                </form>
            </div>
        </div>
    );
};

export default MembershipForm;
