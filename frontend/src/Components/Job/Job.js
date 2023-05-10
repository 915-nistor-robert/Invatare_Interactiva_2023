import './Job.scss'
import React from 'react';
import {useNavigate} from "react-router-dom";


export default function Job( props ){

    const stickyNote = props.note;

    const navigate = useNavigate();

    React.useEffect(() => {
        const handleResize = () => {
            const textContainer = document.getElementById('text-container');
            textContainer.style.height = '';
            const maxHeight = parseInt(
                window.getComputedStyle(textContainer).getPropertyValue('max-height')
            );
            if (textContainer.scrollHeight > maxHeight) {
                textContainer.style.height = maxHeight + 'px';
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div onClick={moveToEditStickyNote} className={'job-main-container'}>
                <div className={'job-header'}>
                    <h1 className={'job-title'}>{stickyNote.title}</h1>
                    <p className={'job-company'}>{stickyNote.subject}</p>
                </div>
                <p id={'text-container'} className={'job-description'}>{stickyNote.description}</p>
            </div>
        </>
    )

    function moveToEditStickyNote() {
        navigate(`/sticky-notes`, {state: stickyNote})
    }

}