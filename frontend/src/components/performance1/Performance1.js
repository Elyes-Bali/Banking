import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import "./Performance1.css";
import ProgressBar from "react-customizable-progressbar";

function Performance1() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    per1: "",
    per2: "",
    per3: "",
    per4: "",
    per5: "",
    per6: "",
    per7: "",
    per8: "",
    per9: "",
 
  });
  console.log(formulaire2);
  const progress = 25;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/per2")
  }
  const hundelUpdate1 =() => {
    navigate("/certification");
  // setPing(!ping);
  };

  return (
    <>
      <div
        className="shadow p-3 trt mb-5 bg-body rounded container "
        id="Performance1"
      >
        <h1 className="text-center azerty p-3 bg-primary text-white">
          <b>Norme de performance 1</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          {formulaire2.per1 == "" &&
          <div className="prog2">{progress}%</div>}
          {formulaire2.per1 == "NON" &&
          <div className="prog2">{progress}%</div>}
           {formulaire2.per1 == "OUI" &&
          <div className="progg22">{progress}%</div>}
        </div>
        <h3 className="stil pt-2 pb-2">
          évaluation et gestion des risques et des impacts environnementaux et
          sociaux
        </h3>

        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que votre société a mis en place un systéme
                    d'évaluation et de suivi des risques sociaux et
                    environnementaux ?
                  </li>
                </legend>
              </label>
              <br />
              <div className="eval">
              <input type="radio" name="evaluationSystem" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per1: e.target.value })
          }/>
              Oui <br />
              <input type="radio" name="evaluationSystem" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per1: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />


          {formulaire2.per1 == "OUI" &&
            <>
          <tr>
            <td>
            <br/>
                <p className="" style={{fontFamily:"bold",fontSize:20}}> Si oui, est-ce que le systéme d'évaluation et de suivi des risques sociaux et environnementaux comprend les élèments suivants :  </p> <br/>
              <label>
                <legend>
                  {" "}
                  <li>Enoncé de Politique</li>
                </legend>
              </label>
              <br />
              <div className="eval">
              <input type="radio" name="policyStatement" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per2: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="policyStatement" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per2: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  {" "}
                  <li>Identification des risques et des impacts</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="riskIdentification" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per3: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="riskIdentification" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per3: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  <li>Programme de gestion</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="managementProgram" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per4: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="managementProgram" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per4: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  {" "}
                  <li>Capacité organisationnelle et compétences</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="organizationalCapacity" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per5: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="organizationalCapacity" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per5: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  <li>Préparation et réponse aux situations d'urgence</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="emergencyPreparation" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per6: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="emergencyPreparation" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per6: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  {" "}
                  <li>Engagement des parties prenantes</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="stakeholderEngagement" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per7: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="stakeholderEngagement" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per7: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <legend>
                  <li>Suivi et évaluation</li>
                </legend>
              </label>
              <br/>
              <div className="eval">
              <input type="radio" name="monitoringEvaluation" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, per8: e.target.value })
          }/>
              Oui<br />
              <input type="radio" name="monitoringEvaluation" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, per8: e.target.value })
          }/>
              Non
              </div>
            </td>
          </tr>
          </>
}
        </div>




        <br />
        <legend>
          <li>plus d'infos ? </li>
        </legend>
        <br />
        <label htmlFor="name" className="sec"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="plus d'infos ?"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, per9: e.target.value })
          }
        />

<button
        type="button"
        class="btn btn-danger w-20 mt-4 rounded-pill pull-left"
        onClick={() => {
          hundelUpdate1();
        
        }}
      >
        precedent
      </button>

        <button
          type="submit"
          class="btn btn-success w-20 mt-4 rounded-pill pull-right mb-5"
          onClick={() => {
            hundelUpdate();
          }}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default Performance1;
