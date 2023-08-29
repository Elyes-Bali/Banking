import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Gestionhumaine.css";
import ProgressBar from "react-customizable-progressbar";
import { editform } from "../../redux/FormSlice/formslice";

const Gestionhumaine = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    cond29: "",
    cond30: "",
    cond31: "",
    cond32: "",
    cond33: "",
    cond34: "",
    cond35: "",
    cond36: "",
    cond37: "",
    cond38: "",
  });
  console.log(formulaire2);

  const progress = 35;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;

  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/gestion");
  };
  const hundelUpdate1 = () => {
    navigate("/per2");
    // setPing(!ping);
  };

  return (
    <div>
      <div className="devide">
        <div className="container txte justify-content-center ">
          <h1 className="text-center pt-3 fs-1 p-3 bg-primary text-white">
            <b> Norme de Performance 2 </b>
          </h1>
          <h1 className="serv">
            <div className="container mt-1 progr">
              <ProgressBar
                progress={progress}
                radius={50}
                strokeColor={barColor}
                strokeWidth={strokeWidth}
                trailWidth={trailWidth}
              />
              <div className="aabb">{progress}%</div>
            </div>
          </h1>
        </div>
        <section>
          <div className="blocs container">
            <table className="table blocs table-bordered">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Hommes</th>
                  <th scope="col">Femmes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Cadres
                  </th>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond29: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond30: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Maîtrise
                  </th>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond31: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond32: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Agents d'exécution
                  </th>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond33: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond34: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Personnel permanent
                  </th>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond35: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond36: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-size-[20px]">
                    Personnel intérimaire
                  </th>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond37: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-holder form-control bordering"
                      type="text"
                      rows={2}
                      minLength="4"
                      maxLength="2000"
                      size="30"
                      required
                      placeholder="Reponse"
                      onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond38: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="btt">
            <button
              type="submit"
              class="btn btn-danger w-20 mt-4  rounded-pill mb-4"
              onClick={() => {
                hundelUpdate1();
              }}
            >
              Precedent
            </button>

            <button
              type="submit"
              class="btn btn-success w-20 mt-4 rounded-pill  mb-4"
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

export default Gestionhumaine;
