import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySong from "../DisplaySongs";

const DeleteSongsfromDatabase = (id, e) => {
  const drop = axios
    .delete("http://127.0.0.1:8000/api/music/${index}")
    .then((res) => {
      const row = this.state.rows.filter((item) => item.id !== id);
      this.setState({ rows });
    });
  const [songRows, setSongRows] = useState([]);
  const rows = [...songRows];
  /*rows.splice(index, 1);*/

  return <button className={DeleteSongsfromDatabase}>Delete</button>;
  /* const [Deletesongs, setDeleteSongs] = useState();
/*
 /* useEffect(() => {
 /*   Delete();
 /* }, []);
/*
 /* function Delete(props, event) {
 /*   event.preventDefault();
/*
 /*   
 /*   let delSong = {DisplaySong.song}
 /* }
 /* async function DeleteSong() {
 /*   const getSongs = async () => {
 /*     const response = await axios.get("http://127.0.0.1:8000/api/music/");
 /*     console.log(response.data);
 /*     setSongs(response.data);
 /*   };
 /*   getSongs();
 /* }*/
};

export default DeleteSongsfromDatabase;
