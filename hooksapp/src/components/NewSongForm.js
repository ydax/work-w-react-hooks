import React, { useState } from "react";

/** Creates a form the user can use to add a song. Accepts the addSong method as a prop received from the SongList Component. */
const NewSongForm = ({ addSong }) => {
  /** Names the state dataset "title" and the method for updating it "setTitle". */
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
      e.preventDefault();
      addSong(title);
      /** Sets the value of the input field to blank after submission by taking advantage of the second return from the useState method: the ability to modify the state with, in this case, the method I've named setTitle. */
      setTitle('');
  }
  return (
    /** Enables users to submit a new song to the list, adding it to the state. */
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      {/** Tracks what the user types into the field via onChange 
      * @param {e} object Event object from the browser.
      * Note: Value is set equal to "title," which is the name of the state data as defined with the useState method.
      */}
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
