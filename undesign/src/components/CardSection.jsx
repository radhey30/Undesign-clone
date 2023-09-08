import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function CardSection() {
  const [resourceData, setResourceData] = useState([]);

  // useEffect(()=>{
  //   const cardObserver = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       entry.target.classList.toggle('intersecting', entry.isIntersecting)
  //     })
  //   }, {
  //     threshold: 1
  //   })
  //   document.querySelectorAll('a#card-element').forEach(card => {
  //     cardObserver.observe(card)
  //   })
  // })

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
        return <Card key={item._id} title={item.title} icon={item.icon} />;
      })}
    </div>
  );
}
