import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const [name, setName] = useState('');
    const [socialHandle, setSocialHandle] = useState('');
    const [images, setImages] = useState([]);
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData=new FormData()
        formData.append('name', name);
        formData.append('socialHandle', socialHandle);
        for (let image of images) {
            formData.append('images', image);
        }
        try {
            await axios.post('https://user-data-dashboard.onrender.com/submit', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Submission successful!');
        } catch (err) {
            console.error(err);
            alert('Error submitting form');
        }
        navigate('/');
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="w-full max-w-lg px-8 py-6 bg-white rounded shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-center">User Submission Form</h2>
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border"
                        />
                    </div>
                    <div>
                        <label>Social Media Handle:</label>
                        <input
                        type="text"
                        value={socialHandle}
                        onChange={(e) => setSocialHandle(e.target.value)}
                        required
                        className="border"
                        />
                    </div>
                    <div>
                        <label>Upload Images:</label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => setImages(Array.from(e.target.files))}
                            className="border"
                        />
                    </div>
                    <button type="submit" className="p-2 text-white bg-blue-500">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
