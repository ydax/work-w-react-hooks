import React, { useState, useEffect } from "react";
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  /** Defines a state property for this Component.
  * @return The data stored inside this Component's state.
  * @return A function that can be called to edit the state data.
  * Note: uses array destructuring to get and store the two return values (e.g. now "songs" references the state data in this Component). I can use any name I like.
  */
  const [songs, setSongs ] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  /** Defines another state property for this Component. */
  const [age, setAge] = useState(20)
  /** Receives the title from NewSongForm Component, adds that to this Component's State. */
  const addSong = (title) => {
    /** Replaces state data for this Component */
    setSongs([...songs, { title, id: uuid() }]);
  };
  /** Runs each time the songs state data changes. 
  * @param {callback} function What to do on data change.
  * @param {watchArray} array (optional) Calibrates the method to only fire when the songs variable changes.
  */
  useEffect(() => {
    console.log('useEffect hook ran on songs change', songs);
  }, [songs])

  /** Runs each time the age state data changes. 
  * @param {callback} function What to do on data change.
  * @param {watchArray} array (optional) Calibrates the method to only fire when the age variable changes.
  */
  useEffect(() => {
    console.log('useEffect hook ran on age change', age);
  }, [age])
  
  return (
    <div className="song-list">
      <ul>
      {/** Iterates over state data to dynamically output song list. */}
      {songs.map(song => {
          return(
            <li key={song.id}>{song.title}</li>
          );
        })}
      </ul>
      {/** Brings in the NewSongForm prop and passes the addSong method to it as a prop. */}
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
