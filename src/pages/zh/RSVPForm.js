import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/RSVPForm.css';

const RSVPForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [guests, setGuests] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://submit-form.com/CiwTpfQw5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    guests,
                    comment,
                }),
            });
            
            if (response.ok) {
                navigate('/submit-success');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || '提交失败');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('提交您的预约申请时出错啦。请重试。');
        }
    };

    return (
        <form className="rsvp-form" onSubmit={handleSubmit}>
            <h2>Yes, 我会参加！</h2>
            <div className="form-group">
                <label>
                    名<span className="required">*</span>
                </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>
                    姓<span className="required">*</span>
                </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>
                    几位宾客?
                </label>
                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                >
                    <option value="" disabled>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="form-group">
                <label>
                    有什么想留言给我们的吗?
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="选填"
                />
            </div>
            <button type="submit">提交</button>
        </form>
    );
};

export default RSVPForm;