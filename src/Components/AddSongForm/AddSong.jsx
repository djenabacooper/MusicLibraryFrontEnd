import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import "./AddSongFormCss.css";

const AddSong = (props, event) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setReleaseDate] = useState(Date);
  /*const fetchAddSongForm = () => {
    fetch("http://127.0.0.1:8000/api/music/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        /*setSong(data);
      });
  };
  useEffect(() => {
    fetchAddSongForm();
  }, []);*/

  function handleSubmit(event) {
    /*event.preventDefault();*/
    const songData = {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
      release_date: release_date,
    };
    axios
      .post("http://127.0.0.1:8000/api/music/", songData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Song Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        ></input>
        <label>Album</label>
        <input
          type="text"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        ></input>
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        ></input>
        <label>Release Date</label>
        <input
          type="date"
          value={release_date}
          onChange={(event) => setReleaseDate(event.target.value)}
        ></input>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;
