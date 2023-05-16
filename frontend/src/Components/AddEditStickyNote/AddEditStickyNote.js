import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './AddEditStickyNote.scss';
import {basePath} from "../../Utils/GeneralUtils";

export default function AddEditStickyNote() {
    const location = useLocation();
    const navigate = useNavigate();
    const stickyNote = location.state;
    const isEditing = !!stickyNote; // Check if there is sticky note to determine if it's an edit mode

    const [formData, setFormData] = useState({
        title: stickyNote ? stickyNote.title : '',
        category: stickyNote ? stickyNote.category : '',
        description: stickyNote ? stickyNote.description : '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const checkEmptyFields = () => {
        if (formData.title === "" || formData.category === "" || formData.description === "") {
            alert("Please fill in all the fields!")
            return false
        }
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission (add/edit logic)
        // ...

        console.log(formData);
        if (checkEmptyFields()) {
            const loggedUser = sessionStorage.getItem('username');
            const response = await fetch(basePath + `/userByUsername?username=${loggedUser}`, {
                        headers: {
                            Accept: 'application/json',
                        },
                    });

            fetch(basePath + '/api/sticky-notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            }).then(response => {
                console.log(response)
            })
            // After successfully adding/editing the sticky note, navigate back to the main page
            // navigate('/notes'); // Replace '/' with the appropriate route for the main page
        }
    };

    return (
        <>
            <div className={'add-sticky-note-container'}>
                <h1>{isEditing ? 'Edit Sticky Note' : 'Add Sticky Note'}</h1>
                <form className={'form-container'} onSubmit={handleSubmit}>

                    <div className={"row"}>
                        <input placeholder={"Title"} type={"text"} className={'input-title'} value={(formData.title)}
                               name={"title"} onChange={handleChange}/>
                        <input placeholder={"Subject"} type={"text"} className={'input-title'}
                               value={(formData.category)}
                               name={"category"} onChange={handleChange}/>
                    </div>

                    <textarea className={'input-description'} value={(formData.description)} onChange={handleChange}
                              name={"description"}/>
                    <button className={'button-style'} type="submit">{isEditing ? 'Update' : 'Add'}</button>

                </form>
            </div>
        </>
    );
}