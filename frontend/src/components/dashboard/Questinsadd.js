import React, { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import uuid from "react-uuid";
import "./Dash.css";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addquest, deletequest, editquest } from "../../redux/QuestSlice/questslice";

const Questinsadd = () => {
  const quest = useSelector((state) => state.quest.allquest);
  const dispatch = useDispatch();
  const [questionner, setUser] = useState({
    questId: uuid(),
    question: "",
  });
  
 
  const navigate = useNavigate();

  const hundelUpdate1 = () => {
    dispatch(addquest(questionner));
    window.location.reload();
    // setPing(!ping);
  };
  const hundelUpdate = (id) => {
 
    dispatch(deletequest({id}));
    window.location.reload();

  };
  console.log(questionner);
  console.log(quest);


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
                    <i className="fas fa-question-circle" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Nombre des Questions :</span>
                    <span className="info-box-number">
                      {quest?.length}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <label>Ajouter Question :</label>
            <input
              className="input-holder form-control bordering"
              type="text"
              id="name"
              name="name"
              minLength="4"
              maxLength="2000"
              size="30"
              required
              placeholder="Ajouter Question"
              onChange={(e) =>
                setUser({ ...questionner, question: e.target.value })
              }
            />
            <button
              type="button"
              class="btn btn-success w-100 mt-4 rounded-pill"
              onClick={() => {
                hundelUpdate1();
                // hundelUpdate1();
              }}
            >
              Ajouter
            </button>

            <table class="table mt-5 ">
              <thead>
                <tr>
                  <th scope="col" className="table-dark">Questions</th>
                  <th scope="col" className="table-dark">Action</th>
                </tr>
              </thead>
              <tbody className="questdd">
                {quest?.map((el) => (
                  <tr>
                    <td className="table-secondary">{el.question}</td>
                    <td className="table-secondary">
                      <Button
                        onClick={() => {
                            hundelUpdate(el._id);
                        
                        }}
                        variant="danger"
                      >
                         Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* <div className="ctn">
      <div className="content-wrapper cadre">
        <div className="card cdr w3-hover-shadow"> */}

            {/* <div className="card-body">
                <Table striped bordered hover>
                  <thead className="txt">
                    <tr>
                      
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="txt">
                    {quest?.map((el) => (
                      <tr>
                        
                        <td>{el.question}</td>
                        <td>{el.email}</td>
                        <td>
                          <Button onClick={()=>{hundelUpdate(el._id,{validator:!el.validator});window.location.reload()}} variant="danger">
                            {el.validator ? "Block User":"Active User"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div> */}
            {/* </div>
          </div>
        </div> */}

            {/* <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Clients</h3>
                    <div className="card-tools"></div>
                  </div> */}
            {/* modification here */}

            {/* <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table tdd" id="table-to-xls">
                        <thead className="">
                          <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Catégorie</th>
                            <th>Compte courant</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {forme?.map((el) => (
                            <tr>
                              <td>{el.nom}</td>
                              <td>
                                <Badge bg="success">{el.coureil}</Badge>
                              </td>
                              <td>
                                <div
                                  className="sparkbar"
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.telephone}
                                </div>
                              </td>
                              <td>
                                <div
                                  className="sparkbar"
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.authcateg}
                                </div>
                              </td>
                              <td>
                                <div
                                  className="sparkbar "
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.compte}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div> */}

            {/* finish here */}
            {/* <div className="card-footer clearfix">
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button btn btn-success mb-3"
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText="Télécharger"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4"></div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Questinsadd;
