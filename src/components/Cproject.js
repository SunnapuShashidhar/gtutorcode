import React from "react";
import Cbutton from "./CConcepts/Cbutton";
function Cproject() {
  const Linkes = [
    {
      id: 1,
      lin: "/historyofC",
      title: "History of C",
    },
    {
      id: 2,
      lin: "/algorithm",
      title: "Algorithm",
    },
    {
      id: 3,
      lin: "/singledimarray",
      title: "Single Dim Array",
    },
    {
      id: 4,
      lin: "/singledimarray",
      title: "Two dim Array",
    },
  ];
  const Links2 = [
    {
      id: 5,
      lin: "/multdimarray",
      title: "Multi dim array",
    },
    {
      id: 6,
      lin: "/stringhandlingjava",
      title: "String handandling funtion",
    },
    {
      id: 7,
      lin: "/looping",
      title: "Lopping Statements",
    },
    {
      id: 8,
      lin: "/controlstatements",
      title: "Control statements",
    },
  ];
  return (
    <div className="container justify-content-center">
      <div className="row d-flex flex-row">
        <div className="col-md-6 d-flex flex-column">
          {Linkes.map((lin) => (
            <div key={lin.id} className="">
              <Cbutton lin={lin} />
            </div>
          ))}
        </div>
        <div className="col-md-6 d-flex flex-column">
          {Links2.map((lin) => (
            <div key={lin.id} className="">
              <Cbutton lin={lin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cproject;
