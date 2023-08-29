import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Bloc.css";
import ProgressBar from "react-customizable-progressbar";

const Bloc4 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    danger1: "",
    danger2: "",
    danger3: "",
    danger4: "",
    danger5: "",
    danger6: "",
    danger7: "",
    danger8: "",
   
  });
  console.log(formulaire2);
  const progress = 65;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}));
    navigate("/bloc5");
   
  }

  const hundelUpdate1 =() => {
    navigate("/bloc3");
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
            <strong> Bloc 4: Matières dangereuses </strong>
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
                    l'utilisation de matières dangereuses ou/et à la production
                    de déchets dangereux ?
                  </th>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      value="OUI"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger1: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Utilisation d'amiante ?</th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger2: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Utilisation de PCB ?</th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger3: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Utilisation de substances détruisant la couche d'ozone (CFC,
                    réfrigérants…) ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger4: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Utilisation de métaux lourds ?</th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger5: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger5: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question5"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger5: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Utilisation ou production de matières dangereuses ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger6: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger6: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question6"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger6: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existe-il un contrôle et un suivi de l'utilisation des
                    matières dangereuses et de la collecte et de l'élimination
                    des déchets dangereux de l'usine ou du projet ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger7: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger7: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question7"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger7: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existe-il des mesures visant à prévenir la production de
                    déchets dangereux ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question8"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger8: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question8"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger8: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question8"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, danger8: e.target.value })}
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
          <div className="prog7">{progress}%</div>
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

export default Bloc4;
