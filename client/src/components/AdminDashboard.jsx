import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    const token = localStorage.getItem("token");
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };
    useEffect(() => {
        const fetchSubmissions = async () => {
            const res = await axios.get('https://user-data-dashboard.onrender.com/admin/submissions',config);
            console.log(res.data);
            setUsers(res.data);
        };
        fetchSubmissions();
    }, []);

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            {users.map((user, index) => (
                <div key={index} className="p-4 border">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Social Handle:</strong> {user.socialHandle}</p>
                    <div className="flex space-x-2">
                        {user.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={`https://user-data-dashboard.onrender.com/${img}`}
                                alt={`user-${index}-${idx}`}
                                className="h-20"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
