import './NotesPage.scss'
import {useState, useEffect} from "react";
import Job from "../Job/Job";
import {useNavigate} from "react-router-dom";
import StickyNote from "../../Utils/GeneralUtils";

export default function NotesPage() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([
        new StickyNote("1", "Grocery List", "Shopping", "Buy milk, eggs, and bread"),
        new StickyNote("2", "Meeting Notes", "Work", "Discussed project timeline and resource allocation"),
        new StickyNote("3", "Birthday Party", "Events", "Plan a surprise party for Alice next month"),
        new StickyNote("4", "Workout Plan", "Fitness", "Monday: Chest and Triceps, Tuesday: Back and Biceps"),
        new StickyNote("5", "Reading List", "Books", "To read: Sapiens, Atomic Habits, The Alchemist"),
        new StickyNote("6", "Vacation Ideas", "Travel", "Possible destinations: Paris, Tokyo, New York"),
        new StickyNote("7", "Learn JavaScript", "Education", "Complete tutorials and build a small project"),
        new StickyNote("8", "Cooking Recipes", "Food", "Try new recipes: pasta carbonara, sushi, paella"),
        new StickyNote("9", "Car Maintenance", "Vehicles", "Schedule oil change and tire rotation"),
        
    ])

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    useEffect(() => {
      // get unique categories from notes
      const uniqueCategories = [...new Set(notes.map((note) => note.subject))];
      setCategories(uniqueCategories);
    }, [notes]);
  
    const filteredNotes = notes.filter(
      (note) => selectedCategories.length === 0 || selectedCategories.includes(note.subject)
    );
  
    const handleCategoryClick = (category) => {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(category)
          ? prevSelectedCategories.filter((cat) => cat !== category)
          : [...prevSelectedCategories, category]
      );
    };
  
    return (
      <>
        <div className={'jobs-main-container'}>
          <div className={'jobs-searchbar-container'}>
            <button
              name={'add-note'}
              className={'jobs-searchbar'}
              onClick={moveToEditStickyNote}
            >
              Add a new note
            </button>
          </div>
          <div className={'category-container'}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category ${selectedCategories.includes(category) ? 'selected' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={'sticky-notes-grid-container'}>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((stickyNote) => (
                <Job key={stickyNote.id} note={stickyNote} />
              ))
            ) : (
              <div className='no-results'>No results found</div>
            )}
          </div>
        </div>
      </>
    );
  
    function moveToEditStickyNote() {
      navigate(`/sticky-notes`);
    }


  }