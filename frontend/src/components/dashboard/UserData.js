import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import "./Dash.css";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserData = () => {
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

              <div className="col-12 col-sm-6 col-md-3">
  <div className="info-box">
    
      <span className="info-box-icon bg-info elevation-1">
        <i className="fas fa-cubes" />
      </span>
      <div className="info-box-content">
      <Link to="https://app.powerbi.com/view?r=eyJrIjoiN2IxNTJlNzAtODAzMC00MDgxLWE2MmQtMTI4NWQ2MmUzNTA4IiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9&fbclid=IwAR2M-976OOFQ8lJSx72Fdo0JsTbreAEpH5mOuEmUKDvQhG304sZ5n2bPpks">
        <span className="info-box-text bold">PowerBI</span>
        </Link>
      </div>
   
  </div>
</div>

              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Informationd des Clients</h3>
                    <div className="card-tools"></div>
                  </div>
                  {/* modification here */}

                  <div className="card-body">
                    <table className="table tdd" id="table-to-xls" border="2">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Adress</th>
                          <th>Type de zone</th>
                          <th>Nature du projet</th>
                          <th>Etude d'impact</th>
                          <th>Permis de batir</th>
                          <th>Etablissement classé</th>
                          <th>autorisation d'exploitation</th>
                          <th>Existance de nuisances</th>
                          <th>Problèmes d'hygiène ou de securité</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forme
                          ?.filter((e) => e.authcateg !== "x")
                          .map((el, index) => (
                            <tr key={index}>
                              <td>{el?.nom}</td>
                              <td>{el?.poste}</td>
                              <td>{el?.grille5}</td>
                              <td>{el?.grille11}</td>
                              <td>{el?.exig1}</td>
                              <td>{el?.exig5}</td>
                              <td>{el?.exig6}</td>
                              <td>{el?.exig7}</td>
                              <td>{el?.cond3}</td>
                              <td>{el?.cond9}</td>
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

export default UserData;
