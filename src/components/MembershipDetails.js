import React, { useState } from 'react';
import './MembershipDetails.css';
import AdminLogin from './AdminLogin'; // Import AdminLogin component

const MembershipDetails = ({ members, deleteMember, editMember }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = (status) => {
        setIsAdmin(status);
    };

    return (
        <div className="container">
            <h2>Membership Details</h2>
            {isAdmin ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index}>
                                <td>{member.name}</td>
                                <td>{member.age}</td>
                                <td>{member.address}</td>
                                <td>
                                    <button onClick={() => editMember(index)}>Edit</button>
                                    <button onClick={() => deleteMember(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <AdminLogin onLogin={handleLogin} />
            )}
        </div>
    );
};

export default MembershipDetails;
