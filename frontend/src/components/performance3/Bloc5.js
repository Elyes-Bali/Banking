import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Bloc.css";
import ProgressBar from "react-customizable-progressbar";

const Bloc5 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    urgance1: "",
    urgance2: "",
    urgance3: "",
    urgance4: "",
  });
  console.log(formulaire2);
  const progress = 70;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/per4")
  }
  const hundelUpdate1 =() => {
    navigate("/bloc4");
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
            <strong> Bloc 5: Préparation aux situations d’urgence</strong>
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
                    Existe-il des précautions à suivre en cas d'accident /
                    d'incident et des procédures d'urgence ?
                  </th>
                  <td>
                    {" "}
                    <input
                      type="radio"
                      value="OUI"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question1"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance1: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Est-ce que les installations de stockage, systèmes de
                    canalisations, réseaux de drainage sont en bon état ?
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance2: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question2"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance2: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Existence de normes internes de surveillance et d'entretien
                    des installations de stockage, systèmes de canalisations,
                    réseaux de drainage
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance3: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question3"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance3: e.target.value })}
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    Cas de pollution des sols et des eaux souterraines au niveau
                    et aux alentours des sites de stockage ou du projet
                  </th>
                  <td>
                    <input
                      type="radio"
                      value="OUI"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NON"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance4: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="NSP"
                      name="question4"
                      onChange={(e) =>
                        setFormulaire({ ...formulaire2, urgance4: e.target.value })}
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
          <div className="prog8">{progress}%</div>
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

export default Bloc5;
