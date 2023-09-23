import React from 'react'

export default function SearchResults({display, resources}) {
  return (
    <div className='searchResults' style={display ? {display: "block"} : {display: "none"}}>
      {resources.length>0 ? resources.slice(0,5).map((resource, idx) => {
        return (
        <a className="searchResult" key={idx} href={resource.link} target='_blank'>
            <img src={resource.logo || "https://static.thenounproject.com/png/36918-200.png"} alt="logo" className='result-img'/>
            <p className='result-text'>{resource.name}</p>
        </a>
        )
      }) : <p>No Results found</p>}
    </div>
  )
}
