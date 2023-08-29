import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editform } from "../../redux/FormSlice/formslice";
import "./Performance222.css";
import ProgressBar from "react-customizable-progressbar";
const Performance222 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    cond39: "",
    cond40: "",
    cond41: "",
    cond42: "",
    cond43: "",
    cond44: "",
    cond45: "",
    cond46: "",
    cond47: "",
    cond48: "",
  });
  console.log(formulaire2);
  const progress = 45;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/bloc1");
  };
  const hundelUpdate1 = () => {
    navigate("/gestion");
    // setPing(!ping);
  };

  return (
    <div
      className="shadow p-3 mb-5 bg-body rounded mt-5 container"
      id="Performance222"
    >
      <h1 className="text-center p-3 bg-primary text-white">
        <b>Norme de Performance 2</b>
      </h1>
      <div className="container mt-1 progr">
              <ProgressBar
                progress={progress}
                radius={50}
                strokeColor={barColor}
                strokeWidth={strokeWidth}
                trailWidth={trailWidth}
              />
              <div className="abb">{progress}%</div>
            </div>
      
          <li>
            <label>Si oui, prière remplir le tableau ci-dessous :</label>
          </li>
          <section>
          <div className="blocs container">
            <table className="table blocs table-bordered ">
              <thead>
                <tr>
                  
                  <th scope="col">Nature de l'accident</th>
                  <th scope="col">Nombre annuel d'occurence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                 
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
                          cond39: e.target.value,
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
                          cond40: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  
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
                          cond41: e.target.value,
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
                          cond42: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                 
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
                          cond43: e.target.value,
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
                          cond44: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

                <tr>
                  
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
                          cond45: e.target.value,
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
                          cond46: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>

              
              </tbody>
            </table>
          </div>
          
        </section>
       
     

      <br />
      <h3>
        <b>Gestion des sous-traitants et fournisseurs :</b>
      </h3>
      <tr>
        <td>
          <label>
            <li>
              Est-ce que votre société a mis en place des dispositifs
              particuliers relatifs à la protection des droits (travail des
              enfants, travail forcé, sécurité et hygiène) de vos sous-traitants
              et de vos fournisseurs :
            </li>
          </label>
          <div className="radi">
            <input type="radio" name="misenplace" value="OUI"   onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond47: e.target.value,
                        })
                      }/> &nbsp; OUI
            <br />
            <input type="radio" name="misenplace" value="NON"   onChange={(e) =>
                        setFormulaire({
                          ...formulaire2,
                          cond47: e.target.value,
                        })
                      }/> &nbsp; NON
          </div>
        </td>
      </tr>
      <br />


      {formulaire2.cond47 == "OUI" &&
            <>
      <tr>
        <td>
          <label>
            <li>
              Si oui, quelles sont les dispositions que votre société a prises
              pour préserver les droits de vos sous-traitants et de vos
              fournisseurs ?
            </li>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            minLength="4"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les dispositions ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                cond48: e.target.value,
              })
            }
          />
        </td>
      </tr>
</>}


      <div className="">
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
              class="btn btn-success w-20 mt-4 rounded-pill pull-right  mb-4"
              onClick={() => {
                hundelUpdate();
              }}
            >
              Suivant
            </button>
          </div>
    </div>
  )
}

export default Performance222