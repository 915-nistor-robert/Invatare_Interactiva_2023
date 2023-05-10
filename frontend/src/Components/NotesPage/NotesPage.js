import './NotesPage.scss'
import {useState} from "react";
import Job from "../Job/Job";
import {useNavigate} from "react-router-dom";
import StickyNote from "../../Utils/GeneralUtils";

export default function NotesPage() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([
        new StickyNote("1", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("2", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("3", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
        new StickyNote("4", "Lagrange", "Mate", "azi lucram cu teorema lu lagrange"),
    ])

    return (<>
            <div className={'jobs-main-container'}>
                <div className={'jobs-searchbar-container'}>
                    <button name={'add-note'} className={'jobs-searchbar'} onClick={moveToEditStickyNote}>Add a new note</button>
                    <input type={'text'} name={'search'} className={'jobs-searchbar'} placeholder={'looking for a certain job?'}/>
                </div>
                <div className={'sticky-notes-grid-container'}>
                    {notes.map((stickyNote)=>(
                        <Job note={stickyNote}/>
                    ))}
                </div>
            </div>
        </>
    )

    function moveToEditStickyNote() {
        navigate(`/sticky-notes`)
    }
}