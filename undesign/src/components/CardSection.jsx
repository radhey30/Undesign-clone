import React, { useEffect } from "react";
import Card from "./Card";

export default function CardSection() {
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

  return (
    <div className="main-cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
