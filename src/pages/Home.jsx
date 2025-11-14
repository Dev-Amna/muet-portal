import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>MUET Portal | Home</title>
        <meta name="description" content="Mehram University of Engineering & Technology - Home Page" />
      </Helmet>
     <div className="fade-in">
  <h1>Welcome to MUET Portal</h1>
  <p>Explore our research, latest news, and events.</p>
</div>

    </div>
  );
}
