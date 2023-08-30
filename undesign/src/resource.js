const titleImg = document.querySelector(".title-img");
const titleHeader = document.querySelector(".title-header");
const titleInfo = document.querySelector(".title-info");
const resources = document.querySelector(".resources");

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
      let i = localStorage.getItem("index");
      let len = obj[i]['cards'].length
    titleImg.innerHTML = obj[i]["img"];
    titleHeader.innerHTML = obj[i]["header"];
    titleInfo.innerHTML = obj[i]["desc"];

    for (let j = 0; j < len; j++) {
      const a = document.createElement("a");
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      img.classList.add("resource-img");
      a.classList.add("resource");
      a.setAttribute("href", "#");
      h3.classList.add("info-header");
      p.classList.add("info-info");

      div1.classList.add("resource-logo");
      div1.appendChild(img);

      div2.classList.add("resource-info");
      div2.appendChild(h3);
      div2.appendChild(p);

      a.appendChild(div1);
      a.appendChild(div2);

      img.src = obj[i].cards[j]["logo"];
      h3.innerHTML = obj[i].cards[j]["name"];
      p.innerHTML = obj[i].cards[j]["info"];

      resources.appendChild(a);
    }
  });
