import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MembershipForm from './components/MembershipForm';
import MembershipDetails from './components/MembershipDetails';

function App() {
    const [members, setMembers] = useState([]);

    const addMember = (member) => {
        setMembers([...members, member]);
    };

    const deleteMember = (index) => {
        const updatedMembers = [...members];
        updatedMembers.splice(index, 1);
        setMembers(updatedMembers);
    };

    const editMember = (index, updatedMember) => {
        const updatedMembers = [...members];
        updatedMembers[index] = updatedMember;
        setMembers(updatedMembers);
    };

    return (
        <div>
            <HomePage />
            <AboutUs />
            <MembershipForm addMember={addMember} />
            <MembershipDetails members={members} deleteMember={deleteMember} editMember={editMember} />
        </div>
    );
}

export default App;

