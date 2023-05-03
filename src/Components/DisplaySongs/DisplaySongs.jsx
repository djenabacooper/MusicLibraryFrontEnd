import React, { Component, useEffect, useState } from "react";
//import React, { Component, useState } from "react";
import "./DisplaySongCss.css";

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

  return (
    <div className="SongsTable">
      <table>
        <thead>
          <tr>
            <tbody>
              <th>Song</th>
              <tr>
                {songs.map((song) => (
                  <td /*key={song.title}*/>{song.title}</td>
                ))}
              </tr>
              <th>Artist</th>
              <tr>
                {songs.map((song) => (
                  <td /*key={song.title}*/>{song.artist}</td>
                ))}
              </tr>
              <th>Genre</th>
              <tr>
                {songs.map((song) => (
                  <td /*key={song.title}*/>{song.genre}</td>
                ))}
              </tr>
            </tbody>
          </tr>
        </thead>
      </table>
    </div>
  );
};

/*{songs.length > 0 && (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
          )}*/
export default DisplaySong;
