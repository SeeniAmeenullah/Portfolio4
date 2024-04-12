import { useState, useEffect } from "react";
let currentSongIndex = -1;
let playlist = [];
let audioPlayer = new Audio();
const Utilities = () => {
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState(
    "Press the below button to get the quote of the day!"
  );
  const [passwordNumber, setPasswordNumber] = useState(0);
  const [password, setPassword] = useState("No password yet");
  const [passwordHelper, setPasswordHelper] = useState("Minimum length is 12");
  const [playing, setPlaying] = useState(false);
  const [playingText, setPlayingText] = useState("None playing");
  const changeNote = (e) => {
    setNote(e.target.value);
  };
  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const responseQuote = `"${data.content}" - ${data.author}`;
    setQuote(responseQuote);
  };
  const downloadNotes = () => {
    if (note.length > 10) {
      const blob = new Blob([note], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "my_notes.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      alert("Note should be at least 10 characters long.");
    }
  };
  const changePlaying = () => {
    if (!audioPlayer.src) {
      playRandomSong();
      setPlaying(true);
      return;
    }
    if (audioPlayer.paused) {
      audioPlayer.play();
      setPlaying(true);
    } else {
      audioPlayer.pause();
      setPlaying(false);
    }
  };
  const fetchPlaylist = async () => {
    const clientId = import.meta.env.VITE_APP_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET;
    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    const accessToken = data.access_token;
    const playlistResponse = await fetch(
      "https://api.spotify.com/v1/playlists/6ZgP8m2OJnDiGC0xGt8y5g/tracks",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const playlistData = await playlistResponse.json();
    playlist = playlistData.items
      .map((item) => ({ url: item.track.preview_url, name: item.track.name }))
      .filter((item) => item.url);
  };
  function playSelectedSong() {
    audioPlayer.src = playlist[currentSongIndex].url;
    audioPlayer.play();
    setPlaying(true);
  }

  function updateCurrentSong() {
    setPlayingText(playlist[currentSongIndex].name);
  }
  const playRandomSong = () => {
    if (playlist.length === 0) return;
    currentSongIndex = Math.floor(Math.random() * playlist.length);
    updateCurrentSong();
    playSelectedSong();
  };
  const playPrevSong = () => {
    if (playlist.length === 0) return;
    currentSongIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    updateCurrentSong();
    playSelectedSong();
  };
  const playNextSong = () => {
    if (playlist.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updateCurrentSong();
    playSelectedSong();
  };
  const changePasswordHandler = (e) => {
    if (+e.target.value > 24) {
      setPasswordHelper("Maximum length is 24");
    } else if (+e.target.value > 12) {
      setPasswordNumber(e.target.value);
    } else {
      setPasswordHelper("Minimum length is 12");
    }
  };
  const getPassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
    let password = "";
    if (+passwordNumber > 24) {
      return;
    }
    if (+passwordNumber < 12) {
      return;
    }
    for (let i = 0; i < passwordNumber; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
    setPasswordHelper("Password generated successfully");
  };
  const copyPassword = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
    } else {
      alert("Please enter a password length and generate one.");
    }
  };
  useEffect(() => {
    fetchPlaylist();
  }, []);
  return (
    <div>
      <section id="projects" className="utils-section">
        <p className="section__text__p1">Play with my</p>
        <h1 className="title">Utilities</h1>
        <div className="main">
          <ul className="cards cards-util">
            <li className="cards_item item-util">
              <div className="util_card">
                <div className="utils_content quote">
                  <h2 className="card_title">Password generator</h2>
                  <p className="password_helper">{passwordHelper}</p>
                  <div className="password-input">
                    <input type="number" onChange={changePasswordHandler} />
                    <h2 className="card_text"></h2>
                  </div>
                  <div className="password-result">
                    <p>{password}</p>
                    <i onClick={copyPassword} className="fa-solid fa-copy"></i>
                  </div>
                  <br />
                  <button className="btn card_btn" onClick={getPassword}>
                    Generate password
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item item-util">
              <div className="util_card">
                <div className="utils_content">
                  <h2 className="card_title">Music player</h2>
                  <div className="music-flex">
                    <div className="music-name">
                      <p>Current song: {playingText}</p>
                    </div>
                    <div className="music-icons">
                      <i
                        onClick={playPrevSong}
                        className="fa-solid fa-backward-step"
                      ></i>
                      <i
                        onClick={changePlaying}
                        className={`fa-solid ${
                          playing === true ? "fa-pause" : "fa-play"
                        }`}
                      ></i>
                      <i
                        onClick={playRandomSong}
                        className="fa-solid fa-shuffle"
                      ></i>
                      <i
                        onClick={playNextSong}
                        className="fa-solid fa-forward-step"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item item-util">
              <div className="util_card">
                <div className="utils_content utils_notes">
                  <h2 className="card_title">Download your notes</h2>
                  <textarea
                    value={note}
                    onChange={changeNote}
                    className="card_text"
                    rows={5}
                    cols={40}
                  />
                  <button className="btn card_btn" onClick={downloadNotes}>
                    Download notes
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item item-util">
              <div className="util_card">
                <div className="utils_content quote">
                  <h2 className="card_title">Quote for the day</h2>
                  <h2 className="card_text">{quote}</h2>
                  <br />
                  <button className="btn card_btn" onClick={getQuote}>
                    Quote&nbsp;&nbsp;&gt;&gt;
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Utilities;
