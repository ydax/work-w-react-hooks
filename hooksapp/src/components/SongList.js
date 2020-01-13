import React, { useState } from "react";
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  /** Defines the state property for this Component.
  * @return The data stored inside this Component's state.
  * @return A function that can be called to edit the state data.
  * Note: uses array destructuring to get and store the two return values (e.g. now "songs" references the state data in this Component). I can use any name I like.
  */
  const [songs, setSongs ] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  /** Receives the title from NewSongForm Component, adds that to this Component's State. */
  const addSong = (title) => {
    /** Replaces state data for this Component */
    setSongs([...songs, { title, id: uuid() }]);
  };
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
    </div>
  );
};

export default SongList;
