import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterSongs = (props, event) => {
  const [allSongs, setAllSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(allSongs);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allSongs.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setFilteredSongs(result);
  };

  useEffect(() => {
    axios("http://127.0.0.1:8000/api/music/")
      .then((response) => {
        setAllSongs(response.data);
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        console.log("No songs matching your search");
      });
  });

  useEffect(() => {
    setSearchQuery(() =>
      setFilteredSongs(
        allSongs.filter((song) => song.title.includes(searchQuery))
      )
    );
  }, [filteredSongs]);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
      </div>
      {/*} <button onClick={() => handleSearch(event.target.value)}>Search</button>*/}
      <div>{filteredSongs.map((value, title) => {})}</div>
      <div>{filteredSongs.title}</div>
    </div>
  );
};

export default FilterSongs;
