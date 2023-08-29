import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Bloc.css";
import ProgressBar from "react-customizable-progressbar";

const Bloc3 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    gaze1: "",
    gaze2: "",
    gaze3: "",
    gaze4: "",
    gaze5: "",
    gaze6: "",
    gaze7: "",
   
  });
  console.log(formulaire2);
  const progress = 60;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/bloc4");
 
  }

  const hundelUpdate1 =() => {
    navigate("/bloc2");
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
            <strong> Bloc 3: Emissions gazeuses </strong>
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
                    Est-ce que le process industriel ou le projet conduit à
                    l'émission de gaz, de poussières ou de particules dans
                    l'atmosphère ?
                  </th>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      value="OUI"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze1: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Emission de COV (composés organiques volatiles) ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze2: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Emission de particules en suspension ?</th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze3: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Autres émissions gazeuses ?</th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze4: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existe-il un contrôle et un suivi des émissions de gaz,
                    poussières ou particules dans l'atmosphère ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze5: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze5: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze5: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Est-ce que vos locaux de production ou de stockage sont
                    équipés d'un système de ventilation forcée ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze6: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze6: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze6: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Est-ce que vos locaux de production ou de stockage ou les
                    machines sont équipés de systèmes de traitement d'air
                    appropriés et dédiés, comportant un ensemble de filtres
                    propres à capter les gaz, poussières ou particules émis dans
                    l'atmosphère ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze7: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze7: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, gaze7: e.target.value })}
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
          <div className="prog6">{progress}%</div>
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
            <button type="submit" className="mt-2 mb-5 btn btn-success" onClick={() => {
            hundelUpdate();
          }}>
              Suivant
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bloc3;
