import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySong from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSongForm/AddSong";
import FilterSongs from "./Components/SongFilter/SongFilter";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const getSongs = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/music/");
      console.log(response.data);
      setSongs(response.data);
    };
    getSongs();
  }

  return (
    <div>
      {/*<button onClick={() => getAllSongs}>Get All Songs</button>*/}
      <DisplaySong songs={songs} />
      {/* <AddSong />*/}
      {/*<FilterSongs />*/}
    </div>
  );
}
export default App;
