import React, { useState } from "react";
import "./styles.css";

const appCenter = {
  Productivity: [
    { name: "notion.so", rating: "4.4" },
    {
      name: "Focus to-do",
      rating: "4.6"
    },
    { name: "Stay Focused", rating: "4.4" }
  ],
  Music: [
    { name: "Amazon music", rating: "4.4" },
    {
      name: "Spotify",
      rating: "4.5"
    },
    { name: "Ganna", rating: "4.3" }
  ],
  video_Players: [
    { name: "MX player", rating: "4.2" },
    {
      name: "Snack Video",
      rating: "4"
    },
    { name: "VLC for android", rating: "4.3" }
  ]
};
export default function App() {
  const [categories, setCategories] = useState("video_Players");
  function categoryClickHandler(category) {
    setCategories(category);
  }
  return (
    <div className="App">
      <h1>Android 📲 App recommendation </h1>
      {Object.keys(appCenter).map((category) => (
        <button onClick={() => categoryClickHandler(category)}>
          {category}
        </button>
      ))}

      <ul>
        {appCenter[categories].map((apps) => (
          <li key={apps.name}>
            <div> {apps.name} </div>
            <div> {apps.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
