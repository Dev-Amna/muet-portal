import React, { useState } from "react";
import news from "../data/news";
import { Helmet } from "react-helmet-async";

export default function News() {
  const [visible, setVisible] = useState(2);

  return (
    <div>
      <Helmet>
        <title>MUET Portal | News & Events</title>
        <meta
          name="description"
          content="MUET latest news and upcoming events"
        />
      </Helmet>

      <h1>News & Events</h1>
      {news.slice(0, visible).map((n) => (
        <div key={n.id} className="card fade-in">
          <h3>{n.title}</h3>
          <p>{n.date}</p>
        </div>
      ))}

      {visible < news.length && (
        <button onClick={() => setVisible(visible + 2)}>Load More</button>
      )}
    </div>
  );
}
