import React, { useState } from 'react';
import './RSVPForm.css';

const RSVPForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [guests, setGuests] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to FormSpark
        fetch('https://submit-form.com/CiwTpfQw5', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                guests,
                comment,
            }),
        }).then((response) => {
            if (response.ok) {
                alert('RSVP submitted successfully!');
                // Clear form
                setFirstName('');
                setLastName('');
                setGuests('');
                setComment('');
            } else {
                alert('There was an error submitting your RSVP. Please try again.');
            }
        });
    };

    return (
        <form className="rsvp-form" onSubmit={handleSubmit}>
            <h2>Yes, I'll Be There</h2>
            <div className="form-group">
                <label>
                    First Name<span className="required">*</span>
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
                    Last Name<span className="required">*</span>
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
                    How many guests?
                </label>
                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                >
                    <option value="" disabled>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="form-group">
                <label>
                    Want to add a comment?
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Optional"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RSVPForm;