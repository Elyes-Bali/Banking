import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import "./Dash.css";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";



const Dashboard = () => {
  const forme = useSelector((state) => state.form.allforms);

  return (
    <div className="mdd ">
      <SideBar />
      <div className="content-wrapper">
        <section className="content pt-4">
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-file" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Nombre Formulaires</span>
                    <span className="info-box-number">{forme?.length}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Clients</h3>
                    <div className="card-tools"></div>
                  </div>
                  {/* modification here */}

                <div className="card-body">
                      <table className="table tdd" id="table-to-xls" border="2">
                        <thead >
                          <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Catégorie</th>
                            <th>Compte courant</th>
                          </tr>
                        </thead>
                        <tbody >
                          {forme?.filter((e)=>e.authcateg !=="x").map((el,index) => (
                            <tr key={index}>
                              <td>{el?.nom}</td>
                              <td>
                                <Badge bg="success">{el?.coureil}</Badge>
                              </td>
                              <td>{el?.telephone}</td>
                              <td>{el?.authcateg}</td>
                              <td>{el?.compte}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                   

                  {/* finish here */}
                  <div className=" clearfix mt-3 pull-right">
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button btn btn-success "
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText="Télécharger"
                    />
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
