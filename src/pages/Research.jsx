import React, { useState } from "react";
import projects from "../data/projects";
import { Helmet } from "react-helmet-async";

export default function Research() {
  const [filter, setFilter] = useState("");

  const filteredProjects = filter
    ? projects.filter((p) => p.tag.toLowerCase() === filter.toLowerCase())
    : projects;

  return (
    <div>
      <Helmet>
        <title>MUET Portal | Research & Innovation</title>
        <meta
          name="description"
          content="MUET Research & Innovation Labs and Projects"
        />
      </Helmet>

      <h1>Research & Innovation</h1>
      <label>
        Filter by tag:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="AI, Energy..."
        />
      </label>

      {filteredProjects.map((p) => (
  <div key={p.id} className="card fade-in">
    <h3>{p.title}</h3>
    <p>Tag: {p.tag}</p>
  </div>
))}

    </div>
  );
}
