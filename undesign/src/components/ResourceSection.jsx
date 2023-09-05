import React from "react";
import ResourceCard from "./ResourceCard";

export default function ResourceSection() {
  return (
    <div className="resource-section">
      <h2 className="title_blue">Featured resources</h2>
      <div className="resources">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}
