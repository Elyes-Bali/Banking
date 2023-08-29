import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editform } from "../../redux/FormSlice/formslice";
import "./Performance4.css";
import ProgressBar from "react-customizable-progressbar";
function Performance4() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    comm1: "",
    comm2: "",
    comm3: "",
    comm4: "",
    comm5: "",
    comm6: "",
   
  });
  console.log(formulaire2);
  const progress = 75;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/performances");
  };
  const hundelUpdate1 = () => {
    navigate("/bloc5");
    // setPing(!ping);
  };
  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded mt-5 container"
        id="Performance4"
      >
        <h1 className="text-center p-3 bg-primary text-white">
          <b>Normes de performance 4</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="baaa">{progress}%</div>
        </div>
        <h3 className="text-center fs-4 fw-2">
          <b>Santé, sécurité et sûreté des communautés</b>
        </h3>
        <br />
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que votre projet ou votre activité a un impact sur la
                    santé et la sécurité des communautés (notamment pour celles
                    vivant à proximité du projet) ?
                  </li>
                </legend>
              </label>
              <div className="project">
                <input type="radio" name="impact" value="OUI"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm1: e.target.value,
                    })
                  } />
                &nbsp; OUI
                <br />
                <input type="radio" name="impact" value="NON"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm1: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <legend>
              Quelles sont les mesures de mitigation que votre société a prises
              pour réduire les impacts de votre projet sur la santé et la
              sécurité des communautés (notamment pour celles vivant à proximité
              du projet) ?
            </legend>
          </label>

          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les dispositions ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                comm2: e.target.value,
              })
            }
            
          />
          <br />
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Lors de l'étude d'impact sur l'environnement, avez-vous
                    procédé à une consultation publique ou à une enquête
                    publique auprès des parties prenantes concernant votre
                    projet ?
                  </li>
                </legend>
              </label>
              <div className="project">
                <input type="radio" name="consultation" value="OUI"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm3: e.target.value,
                    })
                  }/>
                &nbsp; OUI
                <br />
                <input type="radio" name="consultation" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm3: e.target.value,
                    })
                  } />
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <legend>
              Quelles sont les mesures de communications extérieures auprès des
              parties prenantes et les mécanismes de règlement des griefs
              concernant votre projet que votre société a mis en œuvre ?
            </legend>
          </label>
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les dispositions ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                comm4: e.target.value,
              })
            }
          />
          <br />
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que votre société a mis en place des mécanismes de
                    divulgation continue de l'information aux communautés
                    affectées par votre projet ?
                  </li>
                </legend>
              </label>
              <div className="project">
                <input type="radio" name="divulgation" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm5: e.target.value,
                    })
                  } />
                &nbsp; OUI
                <br />
                <input type="radio" name="divulgation" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      comm5: e.target.value,
                    })
                  } />
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <legend>
              Quels sont les mécanismes de divulgation continue de l'information
              aux communautés affectées par votre projet ?
            </legend>
          </label>
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les dispositions ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                comm6: e.target.value,
              })
            }
          />
          <br />
        </div>
        <br />
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
    </>
  );
}

export default Performance4;
