import React, { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import axios from "axios"
export default function ResourceSection() {
  const [randomResources, setRandomResources] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/randomResources').then(data => {
      setRandomResources(data.data)
    })
  }, [])
  return (
    <div className="resource-section">
      <h2 className="title_blue">Featured resources</h2>
      <div className="resources">
        {randomResources?.map((resource, idx) => {
          return <ResourceCard key={idx} resource={resource} />
        })}
      </div>
    </div>
  );
}
