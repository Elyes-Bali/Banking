import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
const SideBar = () => {
  return (
   
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-center">
          <ul className="list">
            
            <li className="list-item">
            <a href="/dashboard" className="nav-link">
              <i
                style={{ fontSize: "20px" }}
                className="list-item-icon fas fa-home"
              />
              <span className="list-item-text">Accueil</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/chart" className="nav-link">
                <i className="list-item-icon fas fa-chart-pie" />
                <span className="list-item-text">analyse</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/userdata" className="nav-link">
                <i className="list-item-icon fas fa-database" />
                <span className="list-item-text">Data</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/quest" className="nav-link">
                <i className="list-item-icon fas fa-plus" />
                <span className="list-item-text">Ajouter Question</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
