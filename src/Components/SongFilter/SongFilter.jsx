import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SongFilterCss.css";
import { useMemo } from "react";
//import "./DisplaySongs";
//import DisplaySong from "../Components/DisplaySongs/DisplaySongs";

/*const SearchSongs = () => {};

/*const [filteredSongs, setFilteredSongs] = useState(allSongs);*/
/*const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allSongs.filter((data) => {
      return data.title.search(value);
    });
    setFilteredSongs(result);
  };*/

/* useEffect(() => {
    axios("http://127.0.0.1:8000/api/music/")
      .then((response) => {
        setAllSongs(response.data);
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        console.log("No songs matching your search");
      });
  });*/
const FilterSongs = (songs) => {
  const [allSongs, setAllSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  /* useEffect(() => {
    fetchSongs();
  }, []);*/
  const filteredSongs = useMemo(
    () => {
      return allSongs.filter((song) => {
        return song.title.includes(searchQuery);
      });
    },
    { searchQuery }
  );

  /* const fetchSongs = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setAllSongs(response.data);
  };*/
  return (
    <div>
      <div className="search">
        <input
          type="text"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
      </div>
      <div>
        {filteredSongs.map((song) => (
          <div>
            <p>{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterSongs;
