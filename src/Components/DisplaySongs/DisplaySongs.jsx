import React, { Component, useEffect, useState } from "react";
//import React, { Component, useState } from "react";
import "./DisplaySongCss.css";
import DeleteSongsfromDatabase from "./Edit/DeleteButton";
import axios from "axios";

const DisplaySong = (props) => {
  const [songs, setSongs] = useState([]);
  const fetchSongs = () => {
    fetch("http://127.0.0.1:8000/api/music/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSongs(data);
      });
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/music/${id}`);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
              <button onClick={() => onDelete(song.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplaySong;
