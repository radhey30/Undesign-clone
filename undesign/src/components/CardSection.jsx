import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function CardSection() {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        setResourceData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="main-cards">
      {resourceData?.map((item) => {
        return <Card key={item._id} header={item.header} icon={item.icon} />;
      })}
    </div>
  );
}
