import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './AddEditStickyNote.scss';

export default function AddEditStickyNote() {
    const location = useLocation();
    const navigate = useNavigate();
    const stickyNote = location.state;
    const isEditing = !!stickyNote; // Check if there is sticky note to determine if it's an edit mode

    const [formData, setFormData] = useState({
        title: stickyNote ? stickyNote.title : '',
        subject: stickyNote ? stickyNote.subject : '',
        description: stickyNote ? stickyNote.description : '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (add/edit logic)
        // ...
        console.log(formData);
        // After successfully adding/editing the sticky note, navigate back to the main page
        navigate('/notes'); // Replace '/' with the appropriate route for the main page
    };

    return (
        <>
            <div className={'add-sticky-note-container'}>
                <h1>{isEditing ? 'Edit Sticky Note' : 'Add Sticky Note'}</h1>
                <form className={'form-container'} onSubmit={handleSubmit}>

                    <div className={"row"}>
                        <input placeholder={"Title"} type={"text"} className={'input-title'} value={(formData.title)}
                               name={"title"} onChange={handleChange}/>
                        <input placeholder={"Subject"} type={"text"} className={'input-title'} value={(formData.subject)}
                               name={"subject"} onChange={handleChange}/>
                    </div>

                    <textarea className={'input-description'} value={(formData.description)} onChange={handleChange}
                        name={"description"}/>
                    <button className={'button-style'} type="submit">{isEditing ? 'Update' : 'Add'}</button>

                </form>
            </div>
        </>
    );
}