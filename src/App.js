import React from "react";
import "./App.css";


function App() {
  const data = [
    {
      title: "THE TLD",
      description:"Does the domain extension math the language of the domain name?",
      img:require('./image/img1.PNG'),
    },
    {
      title: "Domain Length",
      description: "Is the domain short enough to remember?",
      img:require('./image/img2.PNG'),
    },
    {
      title: "Language",
      description: "How complex is the actual domain name?",
      img:require('./image/img3.PNG'),
    },
    {
      title: "International recogition",
      description:"Can the domain name used on an intenational scale?",
      img:require('./image/img4.PNG'),
    },
    {
      title: "Search engine",
      description: "Does the domain follow search endine guidlines?",
      img:require('./image/img5.PNG'),
    },
    {
      title: "Advertising Potential",
      description: "Could the domain be used for avertising campaigns?",
      img:require('./image/img6.PNG'),
    },
    {
      title: "Sales Oppirtunities",
      description:"Can the domain name used on an intenational scale?",
      img:require('./image/img7.PNG'),
    },
    {
      title: "Typo Susceptibility",
      description: "How hight is the risk of mistyping the domain name?",
      img:require('./image/img8.PNG'),
    },
    {
      title: "Business potential",
      description: "Can the domain be used as your company address?",
      img:require('./image/img9.PNG'),
    },
  ];


  return (
    <div className="App">
      {data.map((card) => {
        //console.log("OK");
        return(
        <div>
          <div><img src={card.img} alt="Images"/></div>
          <div>
          <h4> {card.title} </h4>
          <p>{card.description}</p>
          </div>
          
          
        </div>
        );
      })}
    </div>
  );
}

export default App;
