import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Bloc.css";
import ProgressBar from "react-customizable-progressbar";

const Bloc1 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    liquide1: "",
    liquide2: "",
    liquide3: "",
    liquide4: "",
  });
  console.log(formulaire2);
  const progress = 50;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
     navigate("/bloc2");
   
  };

  const hundelUpdate1 =() => {
    navigate("/per22");
  // setPing(!ping);
  };
  return (
    <div>
      <div className="devide">
        <div className="container txte justify-content-center ">
          <h1 className="titre text-center fs-1 mb-5 text-black ">
            {" "}
            Utilisation rationnelle des ressources et prévention de la pollution
          </h1>
          <h1 className="serv">
            <strong> Bloc 1: Gestion des déchets liquides</strong>
          </h1>
          
        </div>
        <section>
          <div className="blocs container">
            <table class="table blocs table-bordered ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">OUI</th>
                  <th scope="col">NON</th>
                  <th scope="col">NSP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Est-ce que l'usine ou le projet produit des déchets
                    liquides?
                  </th>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      value="OUI"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide1: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide1: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide1: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existence d'un raccordement au réseau public
                    d'assainissement ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide2: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide2: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide2: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existence d'une station de prétraitement avant rejet
                    extérieur ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide3: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide3: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide3: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Est-ce qu'il existe un contrôle régulier et un suivi des
                    rejets des eaux usées et pluviales ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide4: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide4: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          liquide4: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container mt-1 progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="prog4">{progress}%</div>
        </div>
          <div className="btt">
          <button
              type="submit"
              className="mt-2 mb-5 mr-2 btn btn-danger"
              onClick={() => {
                hundelUpdate1();
              }}
            >
              precedent
            </button>
            <button
              type="submit"
              className="mt-2 mb-5 btn btn-success"
              onClick={() => {
                hundelUpdate();
              }}
            >
              Suivant
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bloc1;
