import React, { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";

import "./Dash.css"
import { Doughnut } from "react-chartjs-2";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chartes = () => {
  const forme = useSelector((state) => state.form.allforms);

  const categA = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.authcateg === "A") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrA = categA();

  const categB = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.authcateg === "B") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrB = categB();

  const categBB = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.authcateg === "B+") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrBB = categBB();

  const categC = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.authcateg === "C") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrC = categC();

  const categFI = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.authcateg === "FI") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrFI = categFI();

  const refused = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.annex1 === "OUI" ||
      el.annex2 === "OUI" ||
      el.annex3 === "OUI" ||
      el.annex4 === "OUI" ||
      el.annex5 === "OUI" ||
      el.annex6 === "OUI" ||
      el.annex7 === "OUI" ||
      el.annex8 === "OUI" ||
      el.annex9 === "OUI" ||
      el.annex10 === "OUI" ||
      el.annex11 === "OUI" 
      ) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const refuse = refused();


  const accepted = () => {
    var nbr = 0;

    forme?.filter((el) => {
      if (el.annex1 === "NON" &&
      el.annex2 === "NON" &&
      el.annex3 === "NON" &&
      el.annex4 === "NON" &&
      el.annex5 === "NON" &&
      el.annex6 === "NON" &&
      el.annex7 === "NON" &&
      el.annex8 === "NON" &&
      el.annex9 === "NON" &&
      el.annex10 === "NON" &&
      el.annex11 === "NON" 
      ) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const accepet = accepted();
  
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Nombre des Formulaires (${forme?.length})` ,
      },
    },
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Les Catégories (5)",
      },
    },
  };

  const data = {
    labels: [ "Formulaire accepté", "Formulaire refusé"],
    datasets: [
      {
        label: `Formulaire valable`,
        data: [accepet,refuse],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const info = {
    labels: ["A", "B","B+","C","FI"],
    datasets: [
      {
        label: `Catégorie valable`,
        data: [nbrA,nbrB,nbrBB,nbrC,nbrFI ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="sides">
      <SideBar />
      <div className="scrumban offset-md-2 col-md-10">
       
        <div className="card col-md-4 w-hover-shadow">
          <div className="card-header">
          
          </div>
          <div className="card-body">
            <div className="">
              <Doughnut data={data} options={options} />
             
            </div>
          </div>
        </div>
        <div className="card col-md-4 w3-hover-shadow">
          <div className="card-header">
            
          </div>
          <div className="card-body">
            <div className="">
              
              <Doughnut data={info} options={options1} />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Chartes;
